document.addEventListener('DOMContentLoaded', function() {
    fetch('static/content/about.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('about-who-am-i');
        container.innerHTML = `
            <h3 class="font-weight-light">${data.section_who_am_i.title}</h3>
            <span class="line mb-5"></span>
            <h5 class="mb-3">${data.section_who_am_i.subtitle}</h5>
            <p class="mt-20">${data.section_who_am_i.text}</p>
        `;
    })
    .catch(error => console.error('Error loading the about section:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('static/content/about.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('about-personal-info');
        container.innerHTML = `
            <h3 class="font-weight-light">Personal Info</h3>
            <span class="line mb-5"></span>
            <ul class="mt40 info list-unstyled">
                <li><span>Birthdate</span> : ${data.section_personal_info.Birthdate}</li>
                <li><span>Email</span> : ${data.section_personal_info.Email}</li>
                <!-- <li><span>Phone</span> : ${data.section_personal_info.Phone}</li> -->
                <li><span>Address</span> :  ${data.section_personal_info.Address}</li>
            </ul>
            <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link" href="${data.section_personal_info.twitter}"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link" href="${data.section_personal_info.instagram}"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link" href="${data.section_personal_info.github}"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul>
        `;
    })
    .catch(error => console.error('Error loading the about section:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('static/content/about.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('about-my-expertise');
        container.innerHTML = `
            <h3 class="font-weight-light">My Expertise</h3>
            <span class="line mb-5"></span>
            <div class="row">
                <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                <div class="col-10 ml-auto mr-3">
                    <h6>Statistical Analysis & Modeling</h6>
                    <p class="subtitle">${data.section_my_expertise.stats_analysis_modeling}</p>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                <div class="col-10 ml-auto mr-3">
                    <h6>AI System Design</h6>
                    <p class="subtitle">${data.section_my_expertise.system_design}</p>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                <div class="col-10 ml-auto mr-3">
                    <h6>End-to-end Deployment of AI Systems</h6>
                    <p class="subtitle">${data.section_my_expertise.e2e_deployment}</p>
                    <hr>
                </div>
            </div>
        `;
    })
    .catch(error => console.error('Error loading the about section:', error));
});


