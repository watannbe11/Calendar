import { Controller } from "stimulus"
import { Calendar } from '@fullcalendar/core'
import jaLocale from '@fullcalendar/core/locales/ja'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


export default class extends Controller {
  static targets = [ "calendar" ]

  connect() {
    let calendar = new Calendar(this.calendarTarget,{
      locale: jaLocale,
      headerToolbar: { center: 'dayGridMonth,timeGridWeek,timeGridDay' },
      plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin]
    })
    calendar.render()
  }
}
