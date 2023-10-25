package com.guider.service;

import java.util.List;

public interface IService<Q, S> {

    public List<S> listAll() throws Exception;

    public S findById(Long id);

    public S save(Q q);

    public S update(Q q);

    public S delete(Long id);

}
