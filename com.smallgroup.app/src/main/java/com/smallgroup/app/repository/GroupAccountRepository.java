package com.smallgroup.app.repository;

import com.smallgroup.app.domain.GroupAccount;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the GroupAccount entity.
 */
@SuppressWarnings("unused")
public interface GroupAccountRepository extends JpaRepository<GroupAccount,Long> {

}
