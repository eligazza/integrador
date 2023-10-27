package com.guider.service;

import com.guider.exceptions.DuplicatedException;
import com.guider.exceptions.InvalidArgumentException;
import com.guider.exceptions.MissingArgumentException;
import com.guider.exceptions.NotFoundException;

import java.util.List;

public interface IService<Q, S> {

    public List<S> listAll() throws Exception;

    public S findById(Long id) throws InvalidArgumentException, NotFoundException, MissingArgumentException;

    public S save(Q q) throws DuplicatedException, InvalidArgumentException, MissingArgumentException;

    public S update(Q q) throws InvalidArgumentException, MissingArgumentException;

    public S delete(Long id) throws NotFoundException;

}
