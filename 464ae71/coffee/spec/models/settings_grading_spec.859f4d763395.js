// Generated by CoffeeScript 1.6.1
(function() {

  define(["js/models/settings/course_grading_policy"], function(CourseGradingPolicy) {
    return describe("CourseGradingPolicy", function() {
      beforeEach(function() {
        return this.model = new CourseGradingPolicy();
      });
      describe("parse", function() {
        return it("sets a null grace period to 00:00", function() {
          var attrs;
          attrs = this.model.parse({
            grace_period: null
          });
          return expect(attrs.grace_period).toEqual({
            hours: 0,
            minutes: 0
          });
        });
      });
      return describe("parseGracePeriod", function() {
        it("parses a time in HH:MM format", function() {
          var time;
          time = this.model.parseGracePeriod("07:19");
          return expect(time).toEqual({
            hours: 7,
            minutes: 19
          });
        });
        return it("returns null on an incorrectly formatted string", function() {
          expect(this.model.parseGracePeriod("asdf")).toBe(null);
          expect(this.model.parseGracePeriod("7:19")).toBe(null);
          return expect(this.model.parseGracePeriod("1000:00")).toBe(null);
        });
      });
    });
  });

}).call(this);
