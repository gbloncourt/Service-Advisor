import React, { useState, useEffect, useContext } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Container, Row, Col} from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import apiConfig from '../utils';

export const Profile = props => {

    const { params: { index } } = props.match;

	// const [providers, setProviders] = useState([]);

	const [services, setServices] = useState([]);
	
	// const [dataLoaded, setdataLoaded] = useState(false);

	const [serviceEndPoint, setServiceEndPoint] = useState('');

	// const serviceEndPoint = apiConfig.apiUrl+'/service';

	useEffect(() => {
		setServiceEndPoint(apiConfig.apiUrl+'/service');
		document.title = 'My Profile';
	},[]);

	useEffect(()=>{
		console.log(`${serviceEndPoint}`);
		const fetchServices = fetch(`${serviceEndPoint}`)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Examine the text in the response
				return response.json();
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});

			Promise.all([fetchServices])
			.then(data => {
				setServices(data[0]);
			})
			.catch(function(err) {
				console.log("Error with resolving promises.", err);
			});
	},[serviceEndPoint]);

	if ( localStorage.getItem('token') === null	)
	{
		return <Redirect to='/login' />
	}
	return (
		<Container >
		<section className="contact-section my-5">
			<MDBCard>
				<MDBRow>
					<MDBCol lg="12">
						<MDBCardBody className="form">
							<h3 className="mt-4">
								<MDBIcon icon="user-alt" className="pr-2" />
								User Profile
							</h3>
							<MDBRow>
								<MDBCol md="4">
									<div className="md-form mb-0 ">
										<span className="labelprofile">Username: {localStorage.getItem('userName')}</span>
                                    </div>
								</MDBCol> 
								<MDBCol md="4">
									<div className="md-form mb-0">
                                    <span className="labelprofile">Name: {localStorage.getItem('userFullName')}</span>
									</div>
								</MDBCol>
                                <MDBCol md="4">
									<div className="md-form mb-0">
                                    <span className="labelprofile">Email: {localStorage.getItem('userEmail')}</span>
									</div>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCol>				
				</MDBRow>				
				<MDBRow>
					<MDBCol lg="12">
						<MDBCardBody className="form">
							<h3 className="mt-4">
								<MDBIcon icon="tools" className="pr-2" />
								Service Provider Information
							</h3>
							<MDBRow>
								<MDBCol md="8">
									<div className="md-form mb-0">
                                    <span className="labelprofile">What service do you offer? </span>
                                        <div className="col-4 align-self-start inputservices">
											<select className="browser-default custom-select"> 
												<option value= "0">Choose your service</option>
												{services && services.map (service => {
													return (
														<option key = {service.acf.serviceID} value={service.acf.serviceID}>{service.acf.serviceTitle}</option>
													);
													})
												}
												{/* <option value="1">LANDSCAPE</option>
												<option value="2">MAINTENANCE</option>
												<option value="3">PAINTING</option>
												<option value="4">PLUMBING</option>
												<option value="5">REMODELING</option>
												<option value="6">ROOFING</option> */}
											</select>
										</div>
									</div>                                   
								</MDBCol>
                            </MDBRow>
							<MDBRow>
								<MDBCol md="6">
									<div className="md-form mb-0 labelprofile">
										<MDBInput type="text" id="form-contact-company" label="Company Name" name="companyName"/>
									</div>
								</MDBCol>
								<MDBCol md="6">
									<div className="md-form mb-0 labelprofile">
									<MDBInput type="text" id="form-contact-phone" label="Phone" name="phone"/>
									</div>
								</MDBCol>
							</MDBRow>
							<MDBRow>
								<MDBCol md="6">
									<div className="md-form mb-0 labelprofile">
										<MDBInput type="text" id="form-contact-website" label="Website" name="website"/>
									</div>
								</MDBCol>
								<MDBCol md="6">
								<div className="md-form mb-0 labelprofile">
									<span className="labelprofile">Upload your Avatar/Logo </span>
								</div>
								<div className="file-upload-wrapper">
									<input type="file" id="input-file-now" className="file-upload" />
								</div>
								</MDBCol>
							</MDBRow>	
							<MDBRow>
								{/* <MDBCol md="6">
								<div className="md-form mb-0 labelprofile">
									<span className="labelprofile">What service do you offer? </span>
								</div>
								<div className="file-upload-wrapper">
									<input type="file" id="input-file-now" className="file-upload" />
								</div>
								</MDBCol> */}
							</MDBRow>
                            <MDBRow>    
                                <MDBCol md="10 text-right">
                                    <MDBBtn color="secondary">Submit</MDBBtn>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCol>				
				</MDBRow>
			</MDBCard>
		</section>
		</Container>	
	);
};