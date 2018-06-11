/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
 $(window).on("load", function() {
          $(".se-pre-con").fadeOut("slow");
    });


    $(document).ready(function(){

        console.log("everything is ready to go");
        var page_counter=0;

        //  initialize the app-nav links
        $('#dot1 ').css({
                        background: '#FF5A5F',
                        width: '35px'
                    });

        var width1=$('.link-name').width()+31;
        var width2=$('.app-menu-links').width();
        var left_space=(width2-width1)/2 - 6.5
        $('.link-line').width(width1);
        $('.link-line').css({
                left: left_space
            }
        );
        $('#app-menu>div:nth-child(1)').fadeOut();

         $('#hamburger').click(
        function() {
            $('#page-nav').fadeToggle('fast');
            $('#logo').toggleClass("hidden");
            $('#app-menu').toggleClass("hidden-menu show-menu");
            if($('#app-menu').hasClass('hidden-menu'))
                $('#app-menu>div:nth-child(1)').fadeOut(800);
            else
            {
                $('#app-menu>div:nth-child(1)').delay(800).fadeIn(500,"linear");}



            $(this).toggleClass( "menu-cross" );
        }
    );

        //***//

        //  app-nav link hover events

        $('#home-link .link-name').hover(function(){
            $(this).css({fontSize: '0.9em'});
            $('#home-link .link-line').css({
                height: '100%',
                top: '0px'
            });
        },function(){
            $(this).css({fontSize: '1em'});
            $('#home-link .link-line').css({
                height: '16%',
                top: '42%'
            });
        });
        $('#work-link .link-name').hover(function(){
             $(this).css({fontSize: '0.9em'});
            $('#work-link .link-line').css({
                height: '100%',
                top: '0px'
            });
        },function(){
             $(this).css({fontSize: '1em'});
            $('#work-link .link-line').css({
                height: '16%',
                top: '42%'
            });
        });
        $('#about-link .link-name').hover(function(){
             $(this).css({fontSize: '0.9em'});
            $('#about-link .link-line').css({
                height: '100%',
                top: '0px'
            });
        },function(){
             $(this).css({fontSize: '1em'});
            $('#about-link .link-line').css({
                height: '16%',
                top: '42%'
            });
        });

        //***//

        // mousewheel event trigger

        $('body').on('mousewheel', function(event) {
            if($('.body').hasClass("showcase"))
            {
                return true;}

            if($('*,#home,#work-mereexams,#work-farm-droid,#about,.page').is(':animated'))
            {   console.log('is being animated');
                return false;
            }


            var up_down=event.deltaY;
            if(up_down>0){

                if(page_counter>0)
                page_counter=(page_counter-1)%4;
            }
            else
            {
                if(page_counter<3)
                page_counter=(page_counter+1)%4;
            }

            pageChange();



});
        $('#mere-exams-showcase').click(function(){
            $('.body').toggleClass("showcase");
            $('#work-mereexams').toggleClass("showcase-work");
            if($('#work-mereexams').hasClass("showcase-work"))
                $(" #mere-exams-showcase > span:nth-child(1)").text("Close");
            else
                $(" #mere-exams-showcase > span:nth-child(1)").text("View Case");
            $('#work-mereexams > div.left-page> .work-page-content').fadeToggle("1000");
            $('#work-mereexams > div.right-page> .work-page-content').fadeToggle("1000");
            $('.page-name').fadeToggle("1000");
            $('#page-nav').fadeToggle("1000");
        });

        function pageChange(){
            switch (page_counter) {
                case 0:
                    console.log("this is page 1");
                    $('#dot1 ').css({
                        background: '#FF5A5F',
                        width: '40px'
                    });
                    $('#dot2,#dot3,#dot4 ').css({
                        background: '#1A2938',
                        width: '15px'
                    });


                     $('#work-mereexams,#about,#work-farm-droid,.page-title').fadeOut("fast");

                    $('#home').fadeIn(800);
                    break;
                    return console.log("this is page 1");
                case 1:
                    console.log("this is page 2");
                    $('#dot1,#dot3,#dot4 ').css({
                        background: '#1A2938',
                        width: '15px'
                    });

                    $('#dot2 ').css({
                        background: '#FF5A5F',
                        width: '40px'
                    });

                    $('#home,#work-farm-droid,#about').fadeOut('fast');
                    $('.page-title').fadeIn('fast'); $('.page-title').text("WORK");
                    $('#work-mereexams').fadeIn(800);


                    break;
                    return console.log("this is page 2");
                case 2:
                    console.log("this is page 3");
                    $('#dot2,#dot1,#dot4 ').css({
                        background: '#1A2938',
                        width: '15px'
                    });

                    $('#dot3 ').css({
                        background: '#FF5A5F',
                        width: '40px'
                    });

                    $('#work-mereexams,#about,#home').fadeOut('fast');
                    $('.page-title').fadeIn('fast');
                    $('.page-title').text("WORK");
                    $('#work-farm-droid').fadeIn(800);

                    break;
                return console.log("this is page 3");
                case 3:
                    console.log("this is page 4");

                    $('#dot3,#dot1,#dot2 ').css({
                        background: '#1A2938',
                        width: '15px'
                    });
                    $('#dot4 ').css({
                        background: '#FF5A5F',
                        width: '40px'
                    });

                    $('#work-farm-droid,#home,#work-mereexams').fadeOut('fast');
                    $('.page-title').text("ABOUT");
                    $('#about,.page-title').fadeIn(800);
                     break;
                return console.log("this is page 4");
            }
        };

        $('#dot1').click(function(){
            page_counter=0;
            pageChange();
        });
        $('#dot2').click(function(){
            page_counter=1;
            pageChange();
        });
        $('#dot3').click(function(){
            page_counter=2;
            pageChange();
        });
        $('#dot4').click(function(){
            page_counter=3;
            pageChange();
        });

        $('#home-link').click(function(){
            page_counter=0;
            pageChange();
            $('#page-nav').fadeToggle('fast');
            $('#logo').toggleClass("hidden");
            $('#app-menu').toggleClass("hidden-menu show-menu");
            if($('#app-menu').hasClass('hidden-menu'))
                $('#app-menu>div:nth-child(1)').fadeOut(800);
            else
            {
                $('#app-menu>div:nth-child(1)').delay(800).fadeIn(500,"linear");}



            $('#hamburger').toggleClass( "menu-cross" );
        });
        $('#work-link').click(function(){
            page_counter=1;
            pageChange();
            $('#page-nav').fadeToggle('fast');
            $('#logo').toggleClass("hidden");
            $('#app-menu').toggleClass("hidden-menu show-menu");
            if($('#app-menu').hasClass('hidden-menu'))
                $('#app-menu>div:nth-child(1)').fadeOut(800);
            else
            {
                $('#app-menu>div:nth-child(1)').delay(800).fadeIn(500,"linear");}



            $('#hamburger').toggleClass( "menu-cross" );
        });
        $('#about-link').click(function(){
            page_counter=3;
            pageChange();
            $('#page-nav').fadeToggle('fast');
            $('#logo').toggleClass("hidden");
            $('#app-menu').toggleClass("hidden-menu show-menu");
            if($('#app-menu').hasClass('hidden-menu'))
                $('#app-menu>div:nth-child(1)').fadeOut(800);
            else
            {
                $('#app-menu>div:nth-child(1)').delay(800).fadeIn(500,"linear");}



            $('#hamburger').toggleClass( "menu-cross" );
        });
        $('#chatbot-icon,.open-chatbot-link').click(function(){
            $('#chatbot-frame').toggleClass("active-chat disabled-chat");
             $('#chatbot-icon').toggleClass("show-cross show-button");
        });



    })
})();
