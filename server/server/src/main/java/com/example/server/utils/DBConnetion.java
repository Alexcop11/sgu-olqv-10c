package com.example.server.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class DBConnetion {

    @Value("${DB_HOST}")
    private String host;

    @Value("${DB_PORT}")
    private String port;

    @Value("${DB_NAME}")
    private String name;

    @Value("${DB_USER}")
    private String user;

    @Value("${DB_PASS}")
    private String pass;

    @Bean
    public DataSource getConnection() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://" + host + ":" + port +"/"+name);
        dataSource.setUsername(user);
        dataSource.setPassword(pass);
        return dataSource;
    }



}
