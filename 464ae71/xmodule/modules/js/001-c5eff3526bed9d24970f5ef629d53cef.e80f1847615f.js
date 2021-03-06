// Generated by CoffeeScript 1.6.1
(function() {
  var _this = this;

  this.Rubric = (function() {

    Rubric.prototype.rubric_category_sel = '.rubric-category';

    Rubric.prototype.rubric_sel = '.rubric';

    function Rubric(el) {
      var _this = this;
      this.check_complete = function() {
        return Rubric.prototype.check_complete.apply(_this, arguments);
      };
      this.get_total_score = function() {
        return Rubric.prototype.get_total_score.apply(_this, arguments);
      };
      this.get_score_list = function() {
        return Rubric.prototype.get_score_list.apply(_this, arguments);
      };
      this.tracking_callback = function(event) {
        return Rubric.prototype.tracking_callback.apply(_this, arguments);
      };
      this.keypress_callback = function(event) {
        return Rubric.prototype.keypress_callback.apply(_this, arguments);
      };
      this.initialize = function(location) {
        return Rubric.prototype.initialize.apply(_this, arguments);
      };
      this.el = el;
    }

    Rubric.prototype.initialize = function(location) {
      this.$(this.rubric_sel).data("location", location);
      this.$('input[class="score-selection"]').change(this.tracking_callback);
      $(window).unbind('keydown', this.keypress_callback);
      $(window).keydown(this.keypress_callback);
      this.categories = this.$(this.rubric_category_sel);
      this.category = this.$(this.categories.first());
      return this.category_index = 0;
    };

    Rubric.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    Rubric.prototype.keypress_callback = function(event) {
      var inputs, max_score, selected;
      if (this.$(event.target).is('input, textarea')) {
        return;
      }
      if (event.which >= 48 && event.which <= 57) {
        selected = event.which - 48;
      } else if (event.which >= 96 && event.which <= 105) {
        selected = event.which - 96;
      } else {
        return;
      }
      if (this.category_index <= this.categories.length) {
        inputs = this.$("input[name='score-selection-" + this.category_index + "']");
        max_score = inputs.length - 1;
        if (selected > max_score || selected < 0) {
          return;
        }
        inputs.filter("input[value=" + selected + "]").click();
        this.category_index++;
        return this.category = this.$(this.categories[this.category_index]);
      }
    };

    Rubric.prototype.tracking_callback = function(event) {
      var category, data, location, target_selection;
      target_selection = this.$(event.target).val();
      category = this.$(event.target).data("category");
      location = this.$(this.rubric_sel).data('location');
      data = {
        location: location,
        selection: target_selection,
        category: category
      };
      return Logger.log('rubric_select', data);
    };

    Rubric.prototype.get_score_list = function() {
      var i, num_categories, score, score_lst, _i, _ref;
      num_categories = this.$(this.rubric_category_sel).length;
      score_lst = [];
      for (i = _i = 0, _ref = num_categories - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        score = this.$("input[name='score-selection-" + i + "']:checked").val();
        score_lst.push(score);
      }
      return score_lst;
    };

    Rubric.prototype.get_total_score = function() {
      var score, score_lst, tot, _i, _len;
      score_lst = this.get_score_list();
      tot = 0;
      for (_i = 0, _len = score_lst.length; _i < _len; _i++) {
        score = score_lst[_i];
        tot += parseInt(score);
      }
      return tot;
    };

    Rubric.prototype.check_complete = function() {
      var i, num_categories, score, _i, _ref;
      num_categories = this.$(this.rubric_category_sel).length;
      for (i = _i = 0, _ref = num_categories - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        score = this.$("input[name='score-selection-" + i + "']:checked").val();
        if (score === void 0) {
          return false;
        }
      }
      return true;
    };

    return Rubric;

  })();

  this.CombinedOpenEnded = (function() {

    CombinedOpenEnded.prototype.wrapper_sel = 'section.xmodule_CombinedOpenEndedModule';

    CombinedOpenEnded.prototype.coe_sel = 'section.combined-open-ended';

    CombinedOpenEnded.prototype.reset_button_sel = '.reset-button';

    CombinedOpenEnded.prototype.next_step_sel = '.next-step-button';

    CombinedOpenEnded.prototype.question_header_sel = '.question-header';

    CombinedOpenEnded.prototype.submit_evaluation_sel = '.submit-evaluation-button';

    CombinedOpenEnded.prototype.result_container_sel = 'div.result-container';

    CombinedOpenEnded.prototype.combined_rubric_sel = '.combined-rubric-container';

    CombinedOpenEnded.prototype.open_ended_child_sel = 'section.open-ended-child';

    CombinedOpenEnded.prototype.error_sel = '.error';

    CombinedOpenEnded.prototype.answer_area_sel = 'textarea.answer';

    CombinedOpenEnded.prototype.answer_area_div_sel = 'div.answer';

    CombinedOpenEnded.prototype.prompt_sel = '.prompt';

    CombinedOpenEnded.prototype.rubric_wrapper_sel = '.rubric-wrapper';

    CombinedOpenEnded.prototype.hint_wrapper_sel = '.hint-wrapper';

    CombinedOpenEnded.prototype.message_wrapper_sel = '.message-wrapper';

    CombinedOpenEnded.prototype.submit_button_sel = '.submit-button';

    CombinedOpenEnded.prototype.skip_button_sel = '.skip-button';

    CombinedOpenEnded.prototype.file_upload_sel = '.file-upload';

    CombinedOpenEnded.prototype.file_upload_box_sel = '.file-upload-box';

    CombinedOpenEnded.prototype.file_upload_preview_sel = '.file-upload-preview';

    CombinedOpenEnded.prototype.fof_sel = 'textarea.feedback-on-feedback';

    CombinedOpenEnded.prototype.sub_id_sel = 'input.submission_id';

    CombinedOpenEnded.prototype.grader_id_sel = 'input.grader_id';

    CombinedOpenEnded.prototype.grader_status_sel = '.grader-status';

    CombinedOpenEnded.prototype.info_rubric_elements_sel = '.rubric-info-item';

    CombinedOpenEnded.prototype.rubric_collapse_sel = '.rubric-collapse';

    CombinedOpenEnded.prototype.next_rubric_sel = '.rubric-next-button';

    CombinedOpenEnded.prototype.previous_rubric_sel = '.rubric-previous-button';

    CombinedOpenEnded.prototype.oe_alert_sel = '.open-ended-alert';

    CombinedOpenEnded.prototype.save_button_sel = '.save-button';

    function CombinedOpenEnded(el) {
      var _this = this;
      this.graded_callback = function() {
        return CombinedOpenEnded.prototype.graded_callback.apply(_this, arguments);
      };
      this.setup_score_selection = function() {
        return CombinedOpenEnded.prototype.setup_score_selection.apply(_this, arguments);
      };
      this.toggle_rubric = function(event) {
        return CombinedOpenEnded.prototype.toggle_rubric.apply(_this, arguments);
      };
      this.preview_image = function() {
        return CombinedOpenEnded.prototype.preview_image.apply(_this, arguments);
      };
      this.remove_attribute = function(name) {
        return CombinedOpenEnded.prototype.remove_attribute.apply(_this, arguments);
      };
      this.prompt_hide = function() {
        return CombinedOpenEnded.prototype.prompt_hide.apply(_this, arguments);
      };
      this.prompt_show = function() {
        return CombinedOpenEnded.prototype.prompt_show.apply(_this, arguments);
      };
      this.shift_rubric = function(i) {
        return CombinedOpenEnded.prototype.shift_rubric.apply(_this, arguments);
      };
      this.previous_rubric = function() {
        return CombinedOpenEnded.prototype.previous_rubric.apply(_this, arguments);
      };
      this.next_rubric = function() {
        return CombinedOpenEnded.prototype.next_rubric.apply(_this, arguments);
      };
      this.hide_rubrics = function() {
        return CombinedOpenEnded.prototype.hide_rubrics.apply(_this, arguments);
      };
      this.collapse_question = function(event) {
        return CombinedOpenEnded.prototype.collapse_question.apply(_this, arguments);
      };
      this.replace_text_inputs = function() {
        return CombinedOpenEnded.prototype.replace_text_inputs.apply(_this, arguments);
      };
      this.hide_file_upload = function() {
        return CombinedOpenEnded.prototype.hide_file_upload.apply(_this, arguments);
      };
      this.setup_file_upload = function() {
        return CombinedOpenEnded.prototype.setup_file_upload.apply(_this, arguments);
      };
      this.poll = function() {
        return CombinedOpenEnded.prototype.poll.apply(_this, arguments);
      };
      this.queueing = function() {
        return CombinedOpenEnded.prototype.queueing.apply(_this, arguments);
      };
      this.gentle_alert = function(msg) {
        return CombinedOpenEnded.prototype.gentle_alert.apply(_this, arguments);
      };
      this.next_problem = function() {
        return CombinedOpenEnded.prototype.next_problem.apply(_this, arguments);
      };
      this.reset = function(event) {
        return CombinedOpenEnded.prototype.reset.apply(_this, arguments);
      };
      this.confirm_reset = function(event) {
        return CombinedOpenEnded.prototype.confirm_reset.apply(_this, arguments);
      };
      this.skip_post_assessment = function() {
        return CombinedOpenEnded.prototype.skip_post_assessment.apply(_this, arguments);
      };
      this.save_hint = function(event) {
        return CombinedOpenEnded.prototype.save_hint.apply(_this, arguments);
      };
      this.save_assessment = function(event) {
        return CombinedOpenEnded.prototype.save_assessment.apply(_this, arguments);
      };
      this.keyup_handler = function(event) {
        return CombinedOpenEnded.prototype.keyup_handler.apply(_this, arguments);
      };
      this.keydown_handler = function(event) {
        return CombinedOpenEnded.prototype.keydown_handler.apply(_this, arguments);
      };
      this.save_answer = function(event) {
        return CombinedOpenEnded.prototype.save_answer.apply(_this, arguments);
      };
      this.confirm_save_answer = function(event) {
        return CombinedOpenEnded.prototype.confirm_save_answer.apply(_this, arguments);
      };
      this.replace_answer = function(response) {
        return CombinedOpenEnded.prototype.replace_answer.apply(_this, arguments);
      };
      this.store_answer = function(event) {
        return CombinedOpenEnded.prototype.store_answer.apply(_this, arguments);
      };
      this.rebind = function() {
        return CombinedOpenEnded.prototype.rebind.apply(_this, arguments);
      };
      this.message_post = function(event) {
        return CombinedOpenEnded.prototype.message_post.apply(_this, arguments);
      };
      this.show_combined_rubric_current = function() {
        return CombinedOpenEnded.prototype.show_combined_rubric_current.apply(_this, arguments);
      };
      this.get_html = function() {
        return CombinedOpenEnded.prototype.get_html.apply(_this, arguments);
      };
      this.get_html_callback = function(response) {
        return CombinedOpenEnded.prototype.get_html_callback.apply(_this, arguments);
      };
      this.el = el;
      this.$el = $(el);
      this.reinitialize(el);
      $(window).keydown(this.keydown_handler);
      $(window).keyup(this.keyup_handler);
    }

    CombinedOpenEnded.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    CombinedOpenEnded.prototype.reinitialize = function() {
      this.has_been_reset = false;
      this.wrapper = this.$(this.wrapper_sel);
      this.coe = this.$(this.coe_sel);
      this.ajax_url = this.coe.data('ajax-url');
      this.get_html();
      this.coe = this.$(this.coe_sel);
      this.allow_reset = this.coe.data('allow_reset');
      this.id = this.coe.data('id');
      this.state = this.coe.data('state');
      this.task_count = this.coe.data('task-count');
      this.task_number = this.coe.data('task-number');
      this.accept_file_upload = this.coe.data('accept-file-upload');
      this.location = this.coe.data('location');
      this.rub = new Rubric(this.coe);
      this.rub.initialize(this.location);
      this.is_ctrl = false;
      this.reset_button = this.$(this.reset_button_sel);
      this.reset_button.click(this.confirm_reset);
      this.next_problem_button = this.$(this.next_step_sel);
      this.next_problem_button.click(this.next_problem);
      this.question_header = this.$(this.question_header_sel);
      this.question_header.click(this.collapse_question);
      Collapsible.setCollapsibles(this.$el);
      this.submit_evaluation_button = this.$(this.submit_evaluation_sel);
      this.submit_evaluation_button.click(this.message_post);
      this.results_container = this.$(this.result_container_sel);
      this.combined_rubric_container = this.$(this.combined_rubric_sel);
      this.oe = this.$(this.open_ended_child_sel);
      this.errors_area = this.$(this.oe).find(this.error_sel);
      this.answer_area = this.$(this.oe).find(this.answer_area_sel);
      this.prompt_container = this.$(this.oe).find(this.prompt_sel);
      this.rubric_wrapper = this.$(this.oe).find(this.rubric_wrapper_sel);
      this.hint_wrapper = this.$(this.oe).find(this.hint_wrapper_sel);
      this.message_wrapper = this.$(this.oe).find(this.message_wrapper_sel);
      this.submit_button = this.$(this.oe).find(this.submit_button_sel);
      this.save_button = this.$(this.oe).find(this.save_button_sel);
      this.child_state = this.oe.data('state');
      this.child_type = this.oe.data('child-type');
      if (this.child_type === "openended") {
        this.skip_button = this.$(this.oe).find(this.skip_button_sel);
        this.skip_button.click(this.skip_post_assessment);
      }
      this.file_upload_area = this.$(this.oe).find(this.file_upload_sel);
      this.can_upload_files = false;
      this.open_ended_child = this.$(this.oe).find(this.open_ended_child_sel);
      this.out_of_sync_message = 'The problem state got out of sync.  Try reloading the page.';
      if (this.task_number > 1) {
        this.prompt_hide();
      } else if (this.task_number === 1 && this.child_state !== 'initial') {
        this.prompt_hide();
      }
      this.find_assessment_elements();
      this.find_hint_elements();
      return this.rebind();
    };

    CombinedOpenEnded.prototype.get_html_callback = function(response) {
      return this.coe.replaceWith(response.html);
    };

    CombinedOpenEnded.prototype.get_html = function() {
      var url;
      url = "" + this.ajax_url + "/get_html";
      return $.ajaxWithPrefix({
        type: 'POST',
        url: url,
        data: {},
        success: this.get_html_callback,
        async: false
      });
    };

    CombinedOpenEnded.prototype.show_combined_rubric_current = function() {
      var data,
        _this = this;
      data = {};
      return $.postWithPrefix("" + this.ajax_url + "/get_combined_rubric", data, function(response) {
        if (response.success) {
          _this.combined_rubric_container.after(response.html).remove();
          _this.combined_rubric_container = _this.$(_this.combined_rubric_sel);
          _this.toggle_rubric("");
          _this.rubric_collapse = _this.$(_this.rubric_collapse_sel);
          _this.rubric_collapse.click(_this.toggle_rubric);
          _this.hide_rubrics();
          _this.$(_this.previous_rubric_sel).click(_this.previous_rubric);
          _this.$(_this.next_rubric_sel).click(_this.next_rubric);
          if (response.hide_reset) {
            return _this.reset_button.hide();
          }
        }
      });
    };

    CombinedOpenEnded.prototype.message_post = function(event) {
      var evaluation_scoring, external_grader_message, fd, feedback, grader_id, score, settings, submission_id,
        _this = this;
      external_grader_message = $(event.target).parent().parent().parent();
      evaluation_scoring = $(event.target).parent();
      fd = new FormData();
      feedback = this.$(evaluation_scoring).find(this.fof_sel)[0].value;
      submission_id = this.$(external_grader_message).find(this.sub_id_sel)[0].value;
      grader_id = this.$(external_grader_message).find(this.grader_id_sel)[0].value;
      score = this.$(evaluation_scoring).find("input:radio[name='evaluation-score']:checked").val();
      fd.append('feedback', feedback);
      fd.append('submission_id', submission_id);
      fd.append('grader_id', grader_id);
      if (!score) {
        /*
        Translators: A "rating" is a score a student gives to indicate how well
        they feel they were graded on this problem
        */

        this.gentle_alert(gettext("You need to pick a rating before you can submit."));
        return;
      } else {
        fd.append('score', score);
      }
      settings = {
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        success: function(response) {
          _this.gentle_alert(response.msg);
          _this.$('section.evaluation').slideToggle();
          return _this.message_wrapper.html(response.message_html);
        }
      };
      return $.ajaxWithPrefix("" + this.ajax_url + "/save_post_assessment", settings);
    };

    CombinedOpenEnded.prototype.rebind = function() {
      this.submit_button.unbind('click');
      this.submit_button.show();
      this.save_button.unbind('click');
      this.save_button.hide();
      this.reset_button.hide();
      this.hide_file_upload();
      this.next_problem_button.hide();
      this.hint_area.attr('disabled', false);
      if (this.task_number === 1 && this.child_state === 'assessing') {
        this.prompt_hide();
      }
      if (this.child_state === 'done') {
        this.rubric_wrapper.hide();
      }
      if (this.child_type === "openended") {
        this.skip_button.hide();
      }
      if (this.allow_reset === "True") {
        this.show_combined_rubric_current();
        this.reset_button.show();
        this.submit_button.hide();
        this.answer_area.attr("disabled", true);
        this.replace_text_inputs();
        this.hint_area.attr('disabled', true);
        if (this.task_number < this.task_count) {
          /*
          Translators: this message appears when transitioning between openended grading
          types (i.e. self assesment to peer assessment). Sometimes, if a student
          did not perform well at one step, they cannot move on to the next one.
          */

          return this.gentle_alert(gettext("Your score did not meet the criteria to move to the next step."));
        }
      } else if (this.child_state === 'initial') {
        this.answer_area.attr("disabled", false);
        this.submit_button.prop('value', gettext('Submit'));
        this.submit_button.click(this.confirm_save_answer);
        this.setup_file_upload();
        this.save_button.click(this.store_answer);
        return this.save_button.show();
      } else if (this.child_state === 'assessing') {
        this.answer_area.attr("disabled", true);
        this.replace_text_inputs();
        this.hide_file_upload();
        /*
        Translators: one clicks this button after one has finished filling out the grading
        form for an openended assessment
        */

        this.submit_button.prop('value', gettext('Submit assessment'));
        this.submit_button.click(this.save_assessment);
        this.submit_button.attr("disabled", true);
        if (this.child_type === "openended") {
          this.submit_button.hide();
          this.queueing();
          this.grader_status = this.$(this.grader_status_sel);
          return this.grader_status.html("<span class='grading'>" + gettext("Your response has been submitted. Please check back later for your grade." + "</span>"));
        } else if (this.child_type === "selfassessment") {
          return this.setup_score_selection();
        }
      } else if (this.child_state === 'post_assessment') {
        if (this.child_type === "openended") {
          this.skip_button.show();
          this.skip_post_assessment();
        }
        this.answer_area.attr("disabled", true);
        this.replace_text_inputs();
        /*
        Translators: this button is clicked to submit a student's rating of
        an evaluator's assessment
        */

        this.submit_button.prop('value', gettext('Submit post-assessment'));
        if (this.child_type === "selfassessment") {
          return this.submit_button.click(this.save_hint);
        } else {
          return this.submit_button.click(this.message_post);
        }
      } else if (this.child_state === 'done') {
        this.show_combined_rubric_current();
        this.rubric_wrapper.hide();
        this.answer_area.attr("disabled", true);
        this.replace_text_inputs();
        this.hint_area.attr('disabled', true);
        this.submit_button.hide();
        if (this.child_type === "openended") {
          this.skip_button.hide();
        }
        if (this.task_number < this.task_count) {
          return this.next_problem_button.show();
        } else {
          return this.reset_button.show();
        }
      }
    };

    CombinedOpenEnded.prototype.find_assessment_elements = function() {
      return this.assessment = this.$('input[name="grade-selection"]');
    };

    CombinedOpenEnded.prototype.find_hint_elements = function() {
      return this.hint_area = this.$('textarea.post_assessment');
    };

    CombinedOpenEnded.prototype.store_answer = function(event) {
      var data,
        _this = this;
      event.preventDefault();
      if (this.child_state === 'initial') {
        data = {
          'student_answer': this.answer_area.val()
        };
        this.save_button.attr("disabled", true);
        return $.postWithPrefix("" + this.ajax_url + "/store_answer", data, function(response) {
          if (response.success) {
            _this.gentle_alert(gettext("Answer saved, but not yet submitted."));
          } else {
            _this.errors_area.html(response.error);
          }
          return _this.save_button.attr("disabled", false);
        });
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.replace_answer = function(response) {
      var answer_area_div;
      if (response.success) {
        this.rubric_wrapper.html(response.rubric_html);
        this.rubric_wrapper.show();
        this.rub = new Rubric(this.coe);
        this.rub.initialize(this.location);
        this.child_state = 'assessing';
        this.find_assessment_elements();
        this.answer_area.val(response.student_response);
        this.rebind();
        answer_area_div = this.$(this.answer_area_div_sel);
        return answer_area_div.html(response.student_response);
      } else {
        this.submit_button.show();
        this.submit_button.attr('disabled', false);
        return this.gentle_alert(response.error);
      }
    };

    CombinedOpenEnded.prototype.confirm_save_answer = function(event) {
      /*
      Translators: This string appears in a confirmation box after one tries to submit
      an openended problem
      */

      var confirmation_text,
        _this = this;
      confirmation_text = gettext('Please confirm that you wish to submit your work. You will not be able to make any changes after submitting.');
      return accessible_confirm(confirmation_text, function() {
        return _this.save_answer(event);
      });
    };

    CombinedOpenEnded.prototype.save_answer = function(event) {
      var fd, files, max_filesize, settings, that, valid_files_attached,
        _this = this;
      this.$el.find(this.oe_alert_sel).remove();
      this.submit_button.attr("disabled", true);
      this.submit_button.hide();
      event.preventDefault();
      this.answer_area.attr("disabled", true);
      max_filesize = 2 * 1000 * 1000;
      if (this.child_state === 'initial') {
        files = "";
        valid_files_attached = false;
        if (this.can_upload_files === true) {
          files = this.$(this.file_upload_box_sel)[0].files[0];
          if (files !== void 0) {
            valid_files_attached = true;
            if (files.size > max_filesize) {
              files = "";
              this.submit_button.show();
              this.submit_button.attr('disabled', false);
              this.gentle_alert(gettext("You are trying to upload a file that is too large for our system.  Please choose a file under 2MB or paste a link to it into the answer box."));
              return;
            }
          }
        }
        fd = new FormData();
        fd.append('student_answer', this.answer_area.val());
        fd.append('student_file', files);
        fd.append('valid_files_attached', valid_files_attached);
        that = this;
        settings = {
          type: "POST",
          data: fd,
          processData: false,
          contentType: false,
          async: false,
          success: function(response) {
            return _this.replace_answer(response);
          }
        };
        return $.ajaxWithPrefix("" + this.ajax_url + "/save_answer", settings);
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.keydown_handler = function(event) {
      if (event.which === 17 && this.is_ctrl === false) {
        return this.is_ctrl = true;
      } else if (this.is_ctrl === true && event.which === 13 && this.child_state === 'assessing' && this.rub.check_complete()) {
        return this.save_assessment(event);
      }
    };

    CombinedOpenEnded.prototype.keyup_handler = function(event) {
      if (event.which === 17 && this.is_ctrl === true) {
        return this.is_ctrl = false;
      }
    };

    CombinedOpenEnded.prototype.save_assessment = function(event) {
      var checked_assessment, data, score_list,
        _this = this;
      this.submit_button.attr("disabled", true);
      this.submit_button.hide();
      event.preventDefault();
      if (this.child_state === 'assessing' && this.rub.check_complete()) {
        checked_assessment = this.rub.get_total_score();
        score_list = this.rub.get_score_list();
        data = {
          'assessment': checked_assessment,
          'score_list': score_list
        };
        return $.postWithPrefix("" + this.ajax_url + "/save_assessment", data, function(response) {
          if (response.success) {
            _this.child_state = response.state;
            if (_this.child_state === 'post_assessment') {
              _this.hint_wrapper.html(response.hint_html);
              _this.find_hint_elements();
            } else if (_this.child_state === 'done') {
              _this.rubric_wrapper.hide();
            }
            return _this.rebind();
          } else {
            return _this.gentle_alert(response.error);
          }
        });
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.save_hint = function(event) {
      var data,
        _this = this;
      event.preventDefault();
      if (this.child_state === 'post_assessment') {
        data = {
          'hint': this.hint_area.val()
        };
        return $.postWithPrefix("" + this.ajax_url + "/save_post_assessment", data, function(response) {
          if (response.success) {
            _this.message_wrapper.html(response.message_html);
            _this.child_state = 'done';
            return _this.rebind();
          } else {
            return _this.errors_area.html(response.error);
          }
        });
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.skip_post_assessment = function() {
      var _this = this;
      if (this.child_state === 'post_assessment') {
        return $.postWithPrefix("" + this.ajax_url + "/skip_post_assessment", {}, function(response) {
          if (response.success) {
            _this.child_state = 'done';
            return _this.rebind();
          } else {
            return _this.errors_area.html(response.error);
          }
        });
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.confirm_reset = function(event) {
      var message,
        _this = this;
      message = gettext('Are you sure you want to remove your previous response to this question?');
      return accessible_confirm(message, function() {
        return _this.reset(event);
      });
    };

    CombinedOpenEnded.prototype.reset = function(event) {
      var _this = this;
      event.preventDefault();
      if (this.child_state === 'done' || this.allow_reset === "True") {
        return $.postWithPrefix("" + this.ajax_url + "/reset", {}, function(response) {
          if (response.success) {
            _this.answer_area.val('');
            _this.rubric_wrapper.html('');
            _this.hint_wrapper.html('');
            _this.message_wrapper.html('');
            _this.child_state = 'initial';
            _this.coe.after(response.html).remove();
            _this.allow_reset = "False";
            _this.reinitialize(_this.element);
            _this.has_been_reset = true;
            _this.rebind();
            return _this.reset_button.hide();
          } else {
            return _this.errors_area.html(response.error);
          }
        });
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.next_problem = function() {
      var _this = this;
      if (this.child_state === 'done') {
        return $.postWithPrefix("" + this.ajax_url + "/next_problem", {}, function(response) {
          if (response.success) {
            _this.answer_area.val('');
            _this.rubric_wrapper.html('');
            _this.hint_wrapper.html('');
            _this.message_wrapper.html('');
            _this.child_state = 'initial';
            _this.coe.after(response.html).remove();
            _this.reinitialize(_this.element);
            _this.rebind();
            _this.next_problem_button.hide();
            if (!response.allow_reset) {
              return _this.gentle_alert(gettext("Moved to next step."));
            } else {
              /*
              Translators: this message appears when transitioning between openended grading
              types (i.e. self assesment to peer assessment). Sometimes, if a student
              did not perform well at one step, they cannot move on to the next one.
              */

              _this.gentle_alert(gettext("Your score did not meet the criteria to move to the next step."));
              return _this.show_combined_rubric_current();
            }
          } else {
            return _this.errors_area.html(response.error);
          }
        });
      } else {
        return this.errors_area.html(this.out_of_sync_message);
      }
    };

    CombinedOpenEnded.prototype.gentle_alert = function(msg) {
      var alert_elem;
      if (this.$el.find(this.oe_alert_sel).length) {
        this.$el.find(this.oe_alert_sel).remove();
      }
      alert_elem = "<div class='open-ended-alert' role='alert'>" + msg + "</div>";
      this.$el.find('.open-ended-action').after(alert_elem);
      return this.$el.find(this.oe_alert_sel).css({
        opacity: 0
      }).animate({
        opacity: 1
      }, 700);
    };

    CombinedOpenEnded.prototype.queueing = function() {
      if (this.child_state === "assessing" && this.child_type === "openended") {
        if (window.queuePollerID) {
          window.clearTimeout(window.queuePollerID);
        }
        return window.queuePollerID = window.setTimeout(this.poll, 10000);
      }
    };

    CombinedOpenEnded.prototype.poll = function() {
      var _this = this;
      return $.postWithPrefix("" + this.ajax_url + "/check_for_score", function(response) {
        if (response.state === "done" || response.state === "post_assessment") {
          delete window.queuePollerID;
          return _this.reload();
        } else {
          return window.queuePollerID = window.setTimeout(_this.poll, 10000);
        }
      });
    };

    CombinedOpenEnded.prototype.setup_file_upload = function() {
      if (this.accept_file_upload === "True") {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
          this.can_upload_files = true;
          this.file_upload_area.html('<input type="file" class="file-upload-box"><img class="file-upload-preview" src="#" alt="Uploaded image" />');
          this.file_upload_area.show();
          this.$(this.file_upload_preview_sel).hide();
          return this.$(this.file_upload_box_sel).change(this.preview_image);
        } else {
          return this.gentle_alert(gettext('File uploads are required for this question, but are not supported in your browser. Try the newest version of Google Chrome. Alternatively, if you have uploaded the image to another website, you can paste a link to it into the answer box.'));
        }
      }
    };

    CombinedOpenEnded.prototype.hide_file_upload = function() {
      if (this.accept_file_upload === "True") {
        return this.file_upload_area.hide();
      }
    };

    CombinedOpenEnded.prototype.replace_text_inputs = function() {
      var answer_class, answer_id, answer_val, new_text;
      answer_class = this.answer_area.attr('class');
      answer_id = this.answer_area.attr('id');
      answer_val = this.answer_area.val();
      new_text = '';
      new_text = "<div class='" + answer_class + "' id='" + answer_id + "'>" + answer_val + "</div>";
      return this.answer_area.replaceWith(new_text);
    };

    CombinedOpenEnded.prototype.reload = function() {
      return this.reinitialize();
    };

    CombinedOpenEnded.prototype.collapse_question = function(event) {
      var new_text;
      this.prompt_container.slideToggle();
      this.prompt_container.toggleClass('open');
      if (this.prompt_container.hasClass('open')) {
        /*
        Translators: "Show Question" is some text that, when clicked, shows a question's
        content that had been hidden
        */

        new_text = gettext("Show Question");
        Logger.log('oe_show_question', {
          location: this.location
        });
      } else {
        /*
        Translators: "Hide Question" is some text that, when clicked, hides a question's
        content
        */

        Logger.log('oe_hide_question', {
          location: this.location
        });
        new_text = gettext("Hide Question");
      }
      this.question_header.text(new_text);
      return false;
    };

    CombinedOpenEnded.prototype.hide_rubrics = function() {
      var rub, rubrics, _i, _len, _results;
      rubrics = this.$(this.combined_rubric_sel);
      _results = [];
      for (_i = 0, _len = rubrics.length; _i < _len; _i++) {
        rub = rubrics[_i];
        if (this.$(rub).data('status') === "shown") {
          _results.push(this.$(rub).show());
        } else {
          _results.push(this.$(rub).hide());
        }
      }
      return _results;
    };

    CombinedOpenEnded.prototype.next_rubric = function() {
      this.shift_rubric(1);
      return false;
    };

    CombinedOpenEnded.prototype.previous_rubric = function() {
      this.shift_rubric(-1);
      return false;
    };

    CombinedOpenEnded.prototype.shift_rubric = function(i) {
      var number, rub, rubrics, _i, _len;
      rubrics = this.$(this.combined_rubric_sel);
      number = 0;
      for (_i = 0, _len = rubrics.length; _i < _len; _i++) {
        rub = rubrics[_i];
        if (this.$(rub).data('status') === "shown") {
          number = this.$(rub).data('number');
        }
        this.$(rub).data('status', 'hidden');
      }
      if (i === 1 && number < rubrics.length - 1) {
        number = number + i;
      }
      if (i === -1 && number > 0) {
        number = number + i;
      }
      this.$(rubrics[number]).data('status', 'shown');
      return this.hide_rubrics();
    };

    CombinedOpenEnded.prototype.prompt_show = function() {
      if (this.prompt_container.is(":hidden") === true) {
        this.prompt_container.slideToggle();
        this.prompt_container.toggleClass('open');
        return this.question_header.text(gettext("Hide Question"));
      }
    };

    CombinedOpenEnded.prototype.prompt_hide = function() {
      if (this.prompt_container.is(":visible") === true) {
        this.prompt_container.slideToggle();
        this.prompt_container.toggleClass('open');
        return this.question_header.text(gettext("Show Question"));
      }
    };

    CombinedOpenEnded.prototype.log_feedback_click = function(event) {
      var generated_event_type, target;
      target = this.$(event.target);
      if (target.hasClass('see-full-feedback')) {
        return Logger.log('oe_show_full_feedback', {});
      } else if (target.hasClass('respond-to-feedback')) {
        return Logger.log('oe_show_respond_to_feedback', {});
      } else {
        generated_event_type = link_text.toLowerCase().replace(" ", "_");
        return Logger.log("oe_" + generated_event_type, {});
      }
    };

    CombinedOpenEnded.prototype.log_feedback_selection = function(event) {
      var target_selection;
      target_selection = this.$(event.target).val();
      return Logger.log('oe_feedback_response_selected', {
        value: target_selection
      });
    };

    CombinedOpenEnded.prototype.remove_attribute = function(name) {
      if (this.$(this.file_upload_preview_sel).attr(name)) {
        return this.$(this.file_upload_preview_sel)[0].removeAttribute(name);
      }
    };

    CombinedOpenEnded.prototype.preview_image = function() {
      var reader,
        _this = this;
      if (this.$(this.file_upload_box_sel)[0].files && this.$(this.file_upload_box_sel)[0].files[0]) {
        reader = new FileReader();
        reader.onload = function(e) {
          var height_px, max_dim, scale_factor, width_px;
          max_dim = 150;
          _this.remove_attribute('src');
          _this.remove_attribute('height');
          _this.remove_attribute('width');
          _this.$(_this.file_upload_preview_sel).attr('src', e.target.result);
          height_px = _this.$(_this.file_upload_preview_sel)[0].height;
          width_px = _this.$(_this.file_upload_preview_sel)[0].width;
          scale_factor = 0;
          if (height_px > width_px) {
            scale_factor = height_px / max_dim;
          } else {
            scale_factor = width_px / max_dim;
          }
          _this.$(_this.file_upload_preview_sel)[0].width = width_px / scale_factor;
          _this.$(_this.file_upload_preview_sel)[0].height = height_px / scale_factor;
          return _this.$(_this.file_upload_preview_sel).show();
        };
        return reader.readAsDataURL(this.$(this.file_upload_box_sel)[0].files[0]);
      }
    };

    CombinedOpenEnded.prototype.toggle_rubric = function(event) {
      var info_rubric_elements;
      info_rubric_elements = this.$(this.info_rubric_elements_sel);
      info_rubric_elements.slideToggle();
      return false;
    };

    CombinedOpenEnded.prototype.setup_score_selection = function() {
      return this.$("input[class='score-selection']").change(this.graded_callback);
    };

    CombinedOpenEnded.prototype.graded_callback = function() {
      if (this.rub.check_complete()) {
        this.submit_button.attr("disabled", false);
        return this.submit_button.show();
      }
    };

    return CombinedOpenEnded;

  })();

}).call(this);
