import React from "react";
//import Member from "./Member";
//import { members } from "./members";

export default function Ourteam() {
  return (
    // <div className='container'>
    //     <h3>Our Team</h3>
    //     <section className='ourteam flex-container'>
    //         {members.map((member) => {
    //             return <Member key={member.id} {...member} />;
    //         })}
    //     </section>
    // </div>
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-md-7 text-center">
          <h3 class="mb-3">Our Team</h3>
        </div>
      </div>

      {/* <div class="row">
        <div class="col-lg-3 mb-4">
          <div class="row">
            <div class="col-md-12 text-center">
              <img
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                alt="wrapkit"
                class="img-fluid rounded-circle"
              />
              <h5 class="mt-4 font-weight-medium mb-0">Jacob Malana</h5>
              <h6 class="subtitle mb-3"></h6>
            </div>
            <div class="col-md-12 text-center">
            <div class="pt-2"> 

                        
            </div>
          </div> 
          </div>
        </div>

        */}

      <div class="row">
        <div class="col-md-4">
          <img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">Jacob Malana</h5>
          <h6 class="subtitle mb-3">
            Space Engineer — Business Management, Product Management
          </h6>
        </div>

        <div class="col-md-4">
          <img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">Victor Skladnev</h5>
          <h6 class="subtitle mb-3">Algorithm specialist — Bio Tech Management</h6>
        </div>
        <div class="col-md-4">
          <img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">John Eskrine</h5>
          <h6 class="subtitle mb-3">Marketing Channel Management</h6>
        </div>
        </div>

      <div class="row">
      <div class="col-md-3"><img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">William C Horton</h5>
          <h6 class="subtitle mb-3">Business Leader — Strategist Entrepreneurship/Innovation Commercialisation</h6></div>
      
        <div class="col-md-3"><img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">Dr. San Murugeshan</h5>
          <h6 class="subtitle mb-3">Senior Fellow US NRC NASA IT-Specialist</h6></div>
        <div class="col-md-3"><img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">Sue Cyriac</h5>
          <h6 class="subtitle mb-3">Company Executive</h6></div>
        <div class="col-md-3"><img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
            alt="wrapkit"
            class="img-fluid rounded-circle"
          />
          <h5 class="mt-4 font-weight-medium mb-0">Jo Joseph</h5>
          <h6 class="subtitle mb-3">Project Manager</h6></div>
      </div>
    </div>
  );
}
