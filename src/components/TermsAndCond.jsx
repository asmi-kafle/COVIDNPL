import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import '../terms.css'

class ModalPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn class="termsButton" onClick={this.toggle}>
          {" "}
          Terms and Conditions{" "}
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <div class="title">
              <strong>TERMS OF USE</strong>
            </div>
            <p class="paragraph">March 30, 2020</p>
            <div class="title">
              <strong>AGREEMENT TO TERMS</strong>
            </div>
            <p class="paragraph">
              We reserve the right, but not the obligation, to: (1) monitor the
              Site for violations of these Terms of Use; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Terms of Use, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Site or otherwise disable
              all files and content that are excessive in size or are in any way
              burdensome to our systems; and (5) otherwise manage the Site in a
              manner designed to protect our rights and property and to
              facilitate the proper functioning of the Site.
            </p>
            <div class="title">
              <strong>INTELLECTUAL PROPERTY</strong>
            </div>
            <p class="paragraph"> 
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the “Content”) and the trademarks, service marks,
              and logos contained therein (the “Marks”) are owned or controlled
              by us or licensed to us. The Content and the Marks are provided on
              the Site “AS IS” for your information and personal use only.
              Except as expressly provided in these Terms of Use, no part of the
              Site and no Content or Marks may be copied, reproduced,
              aggregated, republished, uploaded, posted, publicly displayed,
              encoded, translated, transmitted, distributed, sold, licensed, or
              otherwise exploited for any commercial purpose whatsoever, without
              our express prior written permission.
            </p>
            <p class="paragraph">
              Provided that you are eligible to use the Site, you are granted a
              limited license to access and use the Site and to download or
              print a copy of any portion of the Content to which you have
              properly gained access solely for your personal, non-commercial
              use. We reserve all rights not expressly granted to you in and to
              the Site, the Content and the Marks.
            </p>
            <div class="title">
              <strong>PROHIBITED ACTIVITIES</strong>
            </div>
            <p class="paragraph">
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us. As a user of the Site, you
            agree not to: 1. Systematically retrieve data or other content from
            the Site to create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us. 2. Trick, defraud, or mislead us and other users, especially in
            any attempt to learn sensitive account information such as user
            passwords. 3. Circumvent, disable, or otherwise interfere with
            security-related features of the Site, including features that
            prevent or restrict the use or copying of any Content or enforce
            limitations on the use of the Site and/or the Content contained
            therein. 4. Disparage, tarnish, or otherwise harm, in our opinion,
            us and/or the Site. 5. Use any information obtained from the Site in
            order to harass, abuse, or harm another person. 6. Make improper use
            of our support services or submit false reports of abuse or
            misconduct. 7. Use the Site in a manner inconsistent with any
            applicable laws or regulations. 8. Use the Site to advertise or
            offer to sell goods and services. 9. Upload or transmit (or attempt
            to upload or to transmit) viruses, Trojan horses, or other material,
            including excessive use of capital letters and spamming (continuous
            posting of repetitive text), that interferes with any party’s
            uninterrupted use and enjoyment of the Site or modifies, impairs,
            disrupts, alters, or interferes with the use, features, functions,
            operation, or maintenance of the Site. 10. Engage in any automated
            use of the system, such as using scripts to send comments or
            messages, or using any data mining, robots, or similar data
            gathering and extraction tools. 11. Delete the copyright or other
            proprietary rights notice from any Content. 12. Attempt to
            impersonate another user or person or use the username of another
            user. 13. Sell or otherwise transfer your profile. 14. Upload or
            transmit (or attempt to upload or to transmit) any material that
            acts as a passive or active information collection or transmission
            mechanism, including without limitation, clear graphics interchange
            formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar
            devices (sometimes referred to as “spyware” or “passive collection
            mechanisms” or “pcms”). 15. Interfere with, disrupt, or create an
            undue burden on the Site or the networks or services connected to
            the Site. 16. Harass, annoy, intimidate, or threaten any of our
            employees or agents engaged in providing any portion of the Site to
            you. 17. Attempt to bypass any measures of the Site designed to
            prevent or restrict access to the Site, or any portion of the Site.
            18. Copy or adapt the Site’s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code. 19. Decipher,
            decompile, disassemble, or reverse engineer any of the software
            comprising or in any way making up a part of the Site. 20. Except as
            may be the result of standard search engine or Internet browser
            usage, use, launch, develop, or distribute any automated system,
            including without limitation, any spider, robot, cheat utility,
            scraper, or offline reader that accesses the Site, or using or
            launching any unauthorized script or other software. 21. Use a
            buying agent or purchasing agent to make purchases on the Site. 22.
            Make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses. 23. Use the
            Site as part of any effort to compete with us or otherwise use the
            Site and/or the Content for any revenue-generating endeavor or
            commercial enterprise.
            </p>
            <p class="paragraph">
              For additional terms and conditions please request at  
              <a class="paragraph" href="mailto:fightcovidnepal@gmail.com?subject=terms and conditions">
                 this link
              </a>
            </p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color=" "
              style={{ backgroundColor: "#4285f4" }}
              onClick={this.toggle}
            >
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
