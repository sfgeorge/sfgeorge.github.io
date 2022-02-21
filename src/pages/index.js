import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import teamImage from '../assets/images/team-grey-people-on-snow-mountain-mountain-mountain-image-crop3-large.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5 text-nowrap">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50">

              I am a passionate Engineering Manager who embodies the belief that
              teams work best when their managers strive to provide an
              environment of trust, career development and encouragement to push
              to one's full potential.  I've been successfully leading teams to
              grow and produce their best results for over 10 years.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-center mb-5">Expertise</h2>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="A misty mountain" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Engineering Management</h4>
              <p className="text-black-50 mb-0">
                I foster team development throughout recruitment, interviewing,
                onboarding, mentoring, ownership, goal-setting, engagement, and
                career growth.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={teamImage} alt="Team climbing a steep, snowy mountain" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Cyber Security</h4>
                  <p className="my-2 text-white-50">
                    I have extensive experience keeping security and
                    observability as shift-left and forefront concerns,
                    implementing projects that need to adhere to compliance
                    standards including SOC 2, HIPAA, and PCI.

                  </p>
                  <p className="my-2 text-white-50">
                    From hands-on experience with penetration testing tools and
                    remediation to directing teams on managing risk, I have
                    well-rounded knowledge in keeping systems and applications
                    secure.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Cloud and Infrastructure</h4>
                  <p className="my-2 text-white-50">
                    Managing CI/CD of SaaS solutions to multi-cloud GCP and AWS environments, I have direct experience with AWS WAF, CloudFront, EC2, S3, Google Storage, and related services.
                  </p>
                  <p className="my-2 text-white-50">
                    With regards to containerization, I have experience with Docker Compose, turning applications into services that are easily scaled up/down.
                  </p>
                  <p className="my-2 text-white-50">
                    I have extensive experience with Linux Redhat and Debian-based systems, as well as provisioning tools such as Ansible and AWS CloudFormation.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">VoIP / Telecommunications</h4>
                  <p className="my-2 text-white-50">
                    My team was responsible for the development and operation of a critical voice communications platform that continues to secure over $8M annual recurring revenue.  The highly-performant platform manages dynamic Interactive Voice Response (IVR) applications in real time, handling hundreds of incoming calls per second using Asterisk PBX, Adhearsion, and JRuby.
                  </p>
                  <p className="my-2 text-white-50">
                    I have extensive experience with network packet capture analysis for VoIP troubleshooting, optimization and security purposes.  I'm well-versed with several VoIP technologies including SIP, RTP, MRCPv2, and WebRTC.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={bgMaster} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Web Development</h4>
                  <p className="my-2 text-white-50">
                    Well-versed with Full-stack Ruby, Python and PHP development, I have designed, implemented, and maintained several significant e-commerce applications for over 20 years.  I have experience with SQL-compliant databases, Redis and NoSQL solutions including ElasticSearch.
                  </p>
                  <p className="my-2 text-white-50">
                    On the frontend, I have experience with React, JQuery, plain-old JavaScript, and CSS.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
