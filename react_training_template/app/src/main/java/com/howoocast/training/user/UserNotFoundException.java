package com.howoocast.training.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class UserNotFoundException extends RuntimeException {

    public ResponseEntity<String> getResponse() {
        return new ResponseEntity<>("해당 유저를 찾을 수 없습니다.", HttpStatus.NOT_FOUND);
    }
}
