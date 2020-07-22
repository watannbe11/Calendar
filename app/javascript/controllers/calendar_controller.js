import { Controller } from "stimulus"
import { Calendar } from '@fullcalendar/core'
import jaLocale from '@fullcalendar/core/locales/ja'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Rails from '@rails/ujs'

export default class extends Controller {
  static targets = ["calendar", "modal", "start_time", "end_time"]

  connect() {
    let _this = this
    let calendar = new Calendar(this.calendarTarget,{
      events: '/events.json',
      editable: true,
      navLinks: true,
      locale: jaLocale,
      headerToolbar: { center: 'dayGridMonth,timeGridWeek,timeGridDay' },
      plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
      navLinkDayClick: function(date, jsEvent) {
        _this.start_timeTarget.value = date
        _this.end_timeTarget.value = date
      },
      eventClick: function (info) {
        info.jsEvent.preventDefault()
        Turbolinks.visit(info.event.extendedProps.show_url)
      }
    })
    calendar.render()
  }
}
