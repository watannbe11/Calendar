require "application_system_test_case"

class CalendarTest < ApplicationSystemTestCase
  test "visiting the root" do
    visit "/"
    assert_selector "h2", text: "2020年7月"
  end
end
