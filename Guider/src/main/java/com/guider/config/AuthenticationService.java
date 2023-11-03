package com.guider.config;

import com.guider.DAO.JwtAuthenticationResponse;
import com.guider.DAO.SignUpRequest;
import com.guider.DAO.SigninRequest;


import org.springframework.stereotype.Service;

@Service
public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}