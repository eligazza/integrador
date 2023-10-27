package com.guider.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DuplicatedException extends Exception {
    public DuplicatedException(String message) {
        super(message);
    }
}
