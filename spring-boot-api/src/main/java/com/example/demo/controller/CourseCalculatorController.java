package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.CourseCalculatorService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class CourseCalculatorController {

	@Autowired
	private CourseCalculatorService calculatorService;
	
	@PostMapping("/courses/calcfee")
	public double getCourseFee(@RequestBody List<Double> courseFeeList) {
		
		return calculatorService.caluclateTotCourse(courseFeeList);
		
	}
	
}
