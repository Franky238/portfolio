    "use strict";

    const ModalOptionsService = {

        getOptions: function (companyName) {

            const companies =  {
                openreply: {
                    title: "OpenReply",
                    description: "Worked as a full-stack developer on customer-facing and internal web applications aimed at improving organizational workflows. <br/><br/> Most projects were built using Vue.js, Node.js with TypeScript, NestJS, and GraphQL. Additionally, I gained hands-on experience with AWS infrastructure and Terraform.",
                    img: {
                        src: "img/modal/reply.png",
                        alt: "OpenReply"
                    },
                    client: {
                        name: "OpenReply",
                        homepage: "https://www.openreply.com"
                    },
                    date: {
                        from: "February 2023",
                        to: ""
                    },
                    service: "Full-stack developer"
                },
                globallogic: {
                    title: "GlobalLogic",
                    description: "Worked on multiple Angular-based projects as a senior full-stack developer and frontend technical lead. <br/><br/> In addition to hands-on development, I was responsible for mentoring students, conducting interviews, and supporting the growth of junior team members.",
                    img: {
                        src: "img/modal/globallogic.png",
                        alt: "GlobalLogic"
                    },
                    client: {
                        name: "GlobalLogic",
                        homepage: "https://www.globallogic.com"
                    },
                    date: {
                        from: "May 2019",
                        to: "February 2023"
                    },
                    service: "Tech lead in web development & Students mentor"
                },
                wirecard: {
                    title: "Wirecard",
                    description: "In this company I worked on applications for Wirecard customers. Frontend is built on Angular 4 with TypeScript.<br/><br/>Wirecard is a software and IT specialist for outsourcing and white label solutions for payment processing and issuing products. As a software and IT specialist, Wirecard is also constantly expanding its portfolio with innovative payment technologies.",
                    img: {
                        src: "img/modal/wirecard.png",
                        alt: "Wirecard"
                    },
                    client: {
                        name: "Wirecard",
                        homepage: "http://www.wirecard.com"
                    },
                    date: {
                        from: "May 2017",
                        to: "May 2019"
                    },
                    service: "Web development"
                },
                solar: {
                    title: "Solar Turbines",
                    description: "My part of work in this company was frontend development on customer application. Frontend is built on Angular.<br/><br/>Headquartered in San Diego, California, USA, Solar Turbines Incorporated, a subsidiary of Caterpillar Inc., is one of the world’s leading manufacturers of industrial gas turbines, with more than 15,000 units and over 2 billion operating hours in over 100 countries.",
                    img: {
                        src: "img/modal/solar.png",
                        alt: "Solar Turbines"
                    },
                    client: {
                        name: "Solar Turbines",
                        homepage: "http://www.solarturbines.com"
                    },
                    date: {
                        from: "February 2016",
                        to: "April 2017"
                    },
                    service: "Web development"
                },
                ness: {
                    title: "Ness KE s.r.o",
                    description: "In this company I worked on many interesting projects which helped me improve my knowledge of frontend and backend development. <br /><br />NESS KDC is a development and innovation center products and technologies that provide services to foreign clients in areas such as automotive, transportation, finance, media and marketing, energy and big data.",
                    img: {
                        src: "img/modal/ness.png",
                        alt: "Ness KE s.r.o."
                    },
                    client: {
                        name: "Ness KE s.r.o.",
                        homepage: "http://www.nesskdc.sk"
                    },
                    date: {
                        from: "January 2015",
                        to: "April 2017"
                    },
                    service: "Web development"
                },
                keyup: {
                    title: "Keyup IT Services, s.r.o.",
                    description: "Here in this company I started my road to became a web developer. I worked on HTML/CSS responsive templates. <br /><br /> Keyup create websites, portals, web applications, content management systems and also connect them to third party services such as publishing platforms, sharing platforms. The code is always built using modern web technologies so it is perfectly displayed on any device.",
                    img: {
                        src: "img/modal/keyup.png",
                        alt: "Keyup IT Services, s.r.o."
                    },
                    client: {
                        name: "Keyup IT Services, s.r.o.",
                        homepage: "http://www.keyup.cz"
                    },
                    date: {
                        from: "Jun 2014",
                        to: "November 2014"
                    },
                    service: "Web Design (HTML5/CSS3)"
                }
            };

            return companies[companyName];
        }
    };

    function Modal(companyName, opts) {
        const options = opts || ModalOptionsService.getOptions(companyName);
        const self = this;

        const init = function () {
            return self.open(companyName, options);
        };

        // Add event listener for ESC key
        $(document).on('keydown', function(event) {
            // Check if the pressed key is ESC (key code 27)
            if (event.keyCode === 27) {
                // Close the modal
                $('.portfolio-modal.in').modal('hide');
            }
        });


        self.open = function (companyName, dataModel) {

            const template = '' +
            '<div class="portfolio-modal modal fade" id="' + companyName + '" tabindex="-1" role="dialog" aria-hidden="true">' +
                '<div class="modal-content">' +
                    '<div class="close-modal" data-dismiss="modal">' +
                        '<div class="lr">' +
                            '<div class="rl"></div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="container">' +
                        '<div class="row">' +
                            '<div class="col-lg-8 col-lg-offset-2">' +
                                '<div class="modal-body">' +
                                    '<img src="' + dataModel.img.src + '" class="img-responsive img-centered" alt="' + dataModel.img.alt + '">' +
                                    '<hr class="star-primary">' +

                                    '<p>' + dataModel.description + '</p>' +
                                    '<ul class="list-inline item-details">' +
                                        '<li>' +
                                            'Client: <strong><a href="' + dataModel.client.homepage + '" target="_blank">' + dataModel.client.name + '</a></strong>' +
                                        '</li>' +
                                        '<li>' +
                                            'Date: <strong>' +
                                            '<span class="success-color">' +
                                                dataModel.date.from + ((dataModel.date.to.length > 0) ? ' to ' + dataModel.date.to : "") +
                                            '</span></strong>' +
                                        '</li>' +
                                        '<li>Service: <strong><span class="success-color">' + dataModel.service + '</span></strong>' +
                                        '</li>' +
                                    '</ul>' +
                                    '<button type="button" class="btn btn-default" data-dismiss="modal">' +
                                        '<i class="fa fa-times"></i>' +
                                        ' Close' +
                                    '</button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

            $('body').append(template);

            return $(template);
        };

        return init();
    }
