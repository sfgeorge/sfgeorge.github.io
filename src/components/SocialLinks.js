import React from 'react';
import { OutboundLink } from "gatsby-plugin-google-gtag";
import config from '../../config';

export default function SocialLinks() {
  return (
    <section id="contact" className="contact-section bg-black">
      <div className="container">
        <div className="row justify-content-md-center">

          {config.email ?
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <OutboundLink href={`mailto:${config.email}`}>{config.email}</OutboundLink>
                  </div>
                </div>
              </div>
            </div>

            : <div />
          }

          {config.address ?
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-location-arrow text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Location</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">{config.address}</div>
                </div>
              </div>
            </div>

            : <div />
          }

          {config.phone ?
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">{config.phone}</div>
                </div>
              </div>
            </div>

            : <div />
          }

          {config.linkedin ?
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className={`fab fa-linkedin text-primary mb-2`}></i>
                  <h4 className="text-uppercase m-0">Contact / Resume</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <OutboundLink target="_blank" rel="noreferrer" href={`${config.linkedin}`}>
                      <i className={`fas fa-hand-point-right fa-2x align-text-top mr-2`}></i>
                      {config.linkedin}
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>

            : <div />
          }

        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <OutboundLink key={url} href={url} target="_blank" rel="noreferrer" className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </OutboundLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
