define(['js/common_helpers/ajax_helpers', 'js/student_account/enrollment'],
    function( AjaxHelpers, EnrollmentInterface ) {
        'use strict';

        describe( 'edx.student.account.EnrollmentInterface', function() {

            var COURSE_KEY = 'edX/DemoX/Fall',
                ENROLL_URL = '/api/enrollment/v1/enrollment',
                FORWARD_URL = '/course_modes/choose/edX/DemoX/Fall/';

            beforeEach(function() {
                // Mock the redirect call
                spyOn(EnrollmentInterface, 'redirect').andCallFake(function() {});
            });

            it('enrolls a user in a course', function() {
                // Spy on Ajax requests
                var requests = AjaxHelpers.requests( this );

                // Attempt to enroll the user
                EnrollmentInterface.enroll( COURSE_KEY );

                // Expect that the correct request was made to the server
                AjaxHelpers.expectRequest(
                    requests,
                    'POST',
                    ENROLL_URL,
                    '{"course_details":{"course_id":"edX/DemoX/Fall"}}'
                );

                // Simulate a successful response from the server
                AjaxHelpers.respondWithJson(requests, {});

                // Verify that the user was redirected correctly
                expect( EnrollmentInterface.redirect ).toHaveBeenCalledWith( FORWARD_URL );
            });

            it('redirects the user if enrollment fails', function() {
                // Spy on Ajax requests
                var requests = AjaxHelpers.requests( this );

                // Attempt to enroll the user
                EnrollmentInterface.enroll( COURSE_KEY );

                // Simulate an error response from the server
                AjaxHelpers.respondWithError(requests);

                // Verify that the user was still redirected
                expect(EnrollmentInterface.redirect).toHaveBeenCalledWith( FORWARD_URL );
            });

        });
    }
);
