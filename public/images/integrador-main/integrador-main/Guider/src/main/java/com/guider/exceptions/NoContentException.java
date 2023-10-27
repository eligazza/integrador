package com.guider.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoContentException extends Exception {

    public NoContentException(String message) {
        super(message);
    }

}

