import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section className="contact-section bg-black">
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
                    <a href={`mailto:${config.email}`}>{config.email}</a>
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
                  <i className={`fab fa-linkedin`}></i>
                  <h4 className="text-uppercase m-0">Contact</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                      <i className={`fas fa-angle-right mr-1`}></i>
                    <a target="_blank" href={`${config.linkedin}`}>
                      {config.linkedin}
                    </a>
                  </div>
                  <div className="small text-black-50">
                      <i className={`fas fa-hand-point-right mr-1`}></i>
                    <a target="_blank" href={`${config.linkedin}`}>
                      {config.linkedin}
                    </a>
                  </div>
                  <div className="small text-black-50">
                      <i className={`fas fa-caret-square-right mr-1`}></i>
                    <a target="_blank" href={`${config.linkedin}`}>
                      {config.linkedin}
                    </a>
                  </div>
                  <div className="small text-black-50">
                      <i className={`fas fa-chevron-circle-right mr-1`}></i>
                    <a target="_blank" href={`${config.linkedin}`}>
                      {config.linkedin}
                    </a>
                  </div>
                  <div className="small text-black-50">
                      <i className={`fas fa-arrow-circle-right mr-1`}></i>
                    <a target="_blank" href={`${config.linkedin}`}>
                      {config.linkedin}
                    </a>
                  </div>
                  <div className="small text-black-50">
                      <i className={`fas fa-arrow-alt-circle-right mr-1`}></i>
                    <a target="_blank" href={`${config.linkedin}`}>
                      {config.linkedin}
                    </a>
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
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
