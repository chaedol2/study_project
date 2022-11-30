package com.howoocast.training.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface UserRepository extends JpaRepository<UserDomain, Long>, QuerydslPredicateExecutor<UserDomain> {

    Optional<UserDomain> findByEmail(String email);
}
