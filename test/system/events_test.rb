require "application_system_test_case"

class EventsTest < ApplicationSystemTestCase
  setup do
    @event = events(:one)
  end

  test "visiting the index" do
    visit events_url
    assert_selector "h1", text: "Events"
  end

  test "creating a Event" do
    visit root_url
    page.accept_confirm do
      click_on 'fc-daygrid-day-number',match: :first
    end

    check "All day" if @event.all_day
    fill_in "End time", with: @event.end_time
    fill_in "Start time", with: @event.start_time
    fill_in "Title", with: @event.title
    click_on "Create Event"

    assert_text "Event was successfully created"
    click_on "Back"
  end

  test "updating a Event" do
    visit edit_event_url(@event)
    click_on "Edit", match: :first

    check "All day" if @event.all_day
    fill_in "End time", with: @event.end_time
    fill_in "Start time", with: @event.start_time
    fill_in "Title", with: @event.title
    click_on "Update Event"

    assert_text "Event was successfully updated"
    click_on "Back"
  end

  test "destroying a Event" do
    visit event_url(@event)

    click_on "delete", match: :first

    assert_redirected_to root_path
end
