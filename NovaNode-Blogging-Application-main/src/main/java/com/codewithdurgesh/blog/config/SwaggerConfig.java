package com.codewithdurgesh.blog.config; // adjust to your actual package

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {

	public static final String AUTHORIZATION_HEADER = "Authorization";

	@Bean
	public OpenAPI api() {

		return new OpenAPI()
				.info(getInfo())
				.components(new Components()
						.addSecuritySchemes("JWT", securityScheme()))
				.addSecurityItem(new SecurityRequirement().addList("JWT"));
	}

	private SecurityScheme securityScheme() {
		return new SecurityScheme()
				.name(AUTHORIZATION_HEADER)
				.type(SecurityScheme.Type.APIKEY)
				.in(SecurityScheme.In.HEADER)
				.scheme("bearer")
				.bearerFormat("JWT");
	}

	private Info getInfo() {
		return new Info()
				.title("Blogging Application : NovaNode")
				.description("This project is developed by Sanjay Kumar")
				.version("1.0")
				.termsOfService("Terms of Service")
				.contact(new Contact()
						.name("Sanjay")
						.url("https://github.com/sanjaychoudhary12")
						.email("rudraroop.33@gmail.com"))
				.license(new io.swagger.v3.oas.models.info.License()
						.name("License of APIS")
						.url("API license URL"));
	}
}