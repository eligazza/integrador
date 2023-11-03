package com.guider.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MissingArgumentException extends Exception {
    public MissingArgumentException(String message) {
        super(message);
    }
}