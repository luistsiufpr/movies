package com.lambranho.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lambranho.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {


}
