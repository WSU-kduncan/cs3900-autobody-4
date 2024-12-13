package com.wsu.shopflowproservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
@SpringBootApplication
public class ShopFlowProServiceApplication {

	/**
	 * SpringBoot Starter method on embedded tomcat server
	 * @param args - Allow to pass String array JVM arguments to set value dynamically during runtime
	 */
	public static void main(String[] args) {
		SpringApplication.run(ShopFlowProServiceApplication.class, args);
	}

}
