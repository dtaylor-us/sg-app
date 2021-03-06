package com.smallgroup.app.configuration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = {"com.smallgroup.app.domain"})
@EnableJpaRepositories(basePackages = {"com.smallgroup.app.repository"})
public class RepositoryConfiguration {
}
