package com.smallgroup.app.repository;

import com.smallgroup.app.domain.Mailbox;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Mailbox entity.
 */
@SuppressWarnings("unused")
public interface MailboxRepository extends JpaRepository<Mailbox,Long> {

}
