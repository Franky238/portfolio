    "use strict";

    var ModalOptionsService = {

        getOptions: function (companyName) {

            var companies =  {
                solar: {
                    title: "Solar Turbines",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et placerat nunc. Duis fermentum tempor ipsum ut lacinia. Quisque volutpat mauris sit amet ante tempus, eget cursus odio viverra. Nullam semper nisl ac rhoncus commodo. Duis eget venenatis dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec maximus sapien quis risus vehicula tincidunt. Phasellus nec consequat nulla, varius ultrices velit.",
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
                        to: "December 2016"
                    },
                    service: "Web development"
                },
                ness: {
                    title: "Ness KE s.r.o",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et placerat nunc. Duis fermentum tempor ipsum ut lacinia. Quisque volutpat mauris sit amet ante tempus, eget cursus odio viverra. Nullam semper nisl ac rhoncus commodo. Duis eget venenatis dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec maximus sapien quis risus vehicula tincidunt. Phasellus nec consequat nulla, varius ultrices velit.",
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
                        to: ""
                    },
                    service: "Web development"
                },
                keyup: {
                    title: "Keyup IT Services, s.r.o.",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et placerat nunc. Duis fermentum tempor ipsum ut lacinia. Quisque volutpat mauris sit amet ante tempus, eget cursus odio viverra. Nullam semper nisl ac rhoncus commodo. Duis eget venenatis dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec maximus sapien quis risus vehicula tincidunt. Phasellus nec consequat nulla, varius ultrices velit.",
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

    function Modal(companyName, options) {
        var options = options || ModalOptionsService.getOptions(companyName);
        var self = this;

        var init = function () {
            return self.open(companyName, options);
        };

        self.open = function (companyName, dataModel) {

            var template = '' +
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
                                            '<a href="!#">' +
                                                dataModel.date.from + ((dataModel.date.to.length > 0) ? ' to ' + dataModel.date.to : "") +
                                            '</a></strong>' +
                                        '</li>' +
                                        '<li>Service: <strong><a href="!#">' + dataModel.service + '</a></strong>' +
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
