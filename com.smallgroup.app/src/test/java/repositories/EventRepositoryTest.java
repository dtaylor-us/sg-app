package repositories;

import com.smallgroup.app.configuration.RepositoryConfiguration;
import com.smallgroup.app.domain.Calendar;
import com.smallgroup.app.domain.Event;
import com.smallgroup.app.repository.CalendarRepository;
import com.smallgroup.app.repository.EventRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@Transactional
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = {RepositoryConfiguration.class})
public class EventRepositoryTest {

    @Autowired
    private CalendarRepository calendarRepository;

    @Autowired
    private EventRepository eventRepository;

    @Test
    public void saveEvent() {
        Event event = new Event();
        event.setEventName("Men's Bible Study");
        event.setAddress1("1740 Van Dyke St.");
        event.setAddress2("apt. b");
        event.setCity("St. Paul");
        event.setState("MN");
        event.setPostalCode("55112");
        event.setStartDate(ZonedDateTime.now());
        event.setEndDate(ZonedDateTime.now().plus(1, ChronoUnit.YEARS));

        assertNull(event.getId());
        eventRepository.save(event);
        assertNotNull(event.getId());

        Event gotEvent = eventRepository.getOne(event.getId());
        assertNotNull(gotEvent);
        assertEquals(event.getId(), gotEvent.getId());


        gotEvent.setCity("Minneapolis");
        eventRepository.save(gotEvent);

        Event updateEvent = eventRepository.findOne(gotEvent.getId());
        assertEquals(gotEvent.getId(), updateEvent.getId());
    }

    @Test
    public void saveListOfEvents(){
        List<Event> events = new ArrayList<>();

        Event event1 = createEvent(
                "Event Name1",
                "Address 11",
                "Address21",
                "City1",
                "State1",
                "Postalcode1",
                ZonedDateTime.now(), ZonedDateTime.now().plus(1, ChronoUnit.YEARS));

        Event event2 = createEvent(
                "Event Name2",
                "Address 12",
                "Address22",
                "City2",
                "State2",
                "Postalcode2",
                ZonedDateTime.now(), ZonedDateTime.now().plus(1, ChronoUnit.YEARS));

        Event event3 = createEvent(
                "Event Name3",
                "Address 13",
                "Address23",
                "City3",
                "State3",
                "Postalcode3",
                ZonedDateTime.now(), ZonedDateTime.now().plus(1, ChronoUnit.YEARS));

        events.add(event1);
        events.add(event2);
        events.add(event3);

        eventRepository.save(events);
        List<Event> fetchedEvents = eventRepository.findAll();

        assertEquals(3, fetchedEvents.size());
    }

    @Test
    public void testFindByName(){
        Event event = new Event();
        event.setEventName("FindTest");
        eventRepository.save(event);
        Event foundByNameEvent = eventRepository.findByEventName("FindTest");
        assertEquals(event.getId(), foundByNameEvent.getId());
    }

    @Test
    public void testDeleteEvent(){
        Event event = new Event();
        event.setEventName("deleteMe");
        eventRepository.save(event);
        eventRepository.delete(event);
        assertNull(eventRepository.findByEventName("deleteMe"));
    }

    @Test
    public void saveEventInCalendar() {
        Calendar calendar = new Calendar();
        Event event = createEvent("Event Name",
                                    "Address 1",
                                    "Address2",
                                    "City",
                                    "State",
                                    "Postalcode",
                                    ZonedDateTime.now(), ZonedDateTime.now().plus(1, ChronoUnit.YEARS));

        assertNull(event.getId());
        eventRepository.save(event);
        assertNotNull(event.getId());

        assertNull(calendar.getId());
        calendar.addCalendarEvent(eventRepository.getOne(event.getId()));
        calendarRepository.save(calendar);
        assertNotNull(calendar.getId());
    }

    //    Test Helpers
    private Event createEvent(String name, String address1, String address2, String city, String state, String postal, ZonedDateTime startDate, ZonedDateTime endDate) {
        Event event = new Event();
        event.setEventName(name);
        event.setAddress1(address1);
        event.setAddress2(address2);
        event.setCity(city);
        event.setState(state);
        event.setPostalCode(postal);
        event.setStartDate(startDate);
        event.setEndDate(endDate);

        return event;
    }
}
