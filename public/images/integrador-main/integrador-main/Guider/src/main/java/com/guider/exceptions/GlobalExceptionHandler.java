package com.guider.exceptions;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger LOG = LogManager.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler({NoContentException.class})
    public ResponseEntity<ErrorResponse> handleNoContentException(NoContentException e) {
        e.printStackTrace();
        LOG.error(e.getMessage());
        ErrorResponse errorResponse = new ErrorResponse(
                1001,
                "No content",
                e.getMessage());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(errorResponse);
    }

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<ErrorResponse> handleNotFoundException(NotFoundException e) {
        e.printStackTrace();
        LOG.error(e.getMessage());
        ErrorResponse errorResponse = new ErrorResponse(
                1002,
                "Not found",
                e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    @ExceptionHandler({DuplicatedException.class})
    public ResponseEntity<ErrorResponse> handleDuplicatedException(DuplicatedException e) {
        e.printStackTrace();
        LOG.error(e.getMessage());
        ErrorResponse errorResponse = new ErrorResponse(
                1003,
                "Resource already exists",
                e.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
    }

    @ExceptionHandler({MissingArgumentException.class})
    public ResponseEntity<ErrorResponse> handleMissingArgumentException(MissingArgumentException e) {
        e.printStackTrace();
        LOG.error(e.getMessage());
        ErrorResponse errorResponse = new ErrorResponse(
                2001,
                "Missing argument",
                e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }

    @ExceptionHandler({InvalidArgumentException.class})
    public ResponseEntity<ErrorResponse> handleInvalidArgumentException(InvalidArgumentException e) {
        e.printStackTrace();
        LOG.error(e.getMessage());
        ErrorResponse errorResponse = new ErrorResponse(
                2002,
                "Invalid argument",
                e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }
}
