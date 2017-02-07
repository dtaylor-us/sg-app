package com.smallgroup.app.repository;

import com.smallgroup.app.domain.Event;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Event entity.
 */
@SuppressWarnings("unused")
public interface EventRepository extends JpaRepository<Event,Long> {
    Event findByEventName(String eventName);
    List<Event> findAllByEventName(String eventName);

//    Find by start event
//    Find all by start event

}
