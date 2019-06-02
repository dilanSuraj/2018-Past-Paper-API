package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourseCalculatorService {

	public double caluclateTotCourse(List<Double> courseFeeList) {
		
		double totalAmt = 0;
		for(double courseFee: courseFeeList) {
			totalAmt += courseFee;
		}
		
		return totalAmt;
	}
	
}
