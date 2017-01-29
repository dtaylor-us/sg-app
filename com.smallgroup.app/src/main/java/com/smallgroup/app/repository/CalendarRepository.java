package com.smallgroup.app.repository;

import com.smallgroup.app.domain.Calendar;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Calendar entity.
 */
@SuppressWarnings("unused")
public interface CalendarRepository extends JpaRepository<Calendar,Long> {

}
