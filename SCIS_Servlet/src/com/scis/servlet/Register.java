package com.scis.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Register extends HttpServlet {
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    String email = request.getParameter("emailId");
    String firstName = request.getParameter("firstName");
    String gender = request.getParameter("gender");
    String password = request.getParameter("password");
    String date = request.getParameter("date");
    String address = request.getParameter("address");
    
    String aadhar = request.getParameter("aadhar");
    String phoneNumber = request.getParameter("phoneNumber");
    
    
    System.out.println(email);

    try {
    
      Class.forName("com.mysql.jdbc.Driver").newInstance();
      Connection con = DriverManager.getConnection("jdbc:mysql://localhost/scis?user=root&password=passwd@123");

      PreparedStatement ps = con.prepareStatement("insert into users values(?,?,?,?,?,?,?,?)");

      ps.setString(1, email);
      ps.setString(2, firstName);
      ps.setString(3, gender);
      ps.setString(4, password);
      ps.setString(5, date);
      ps.setString(6, address);
      ps.setString(7, aadhar);
      ps.setString(8, phoneNumber);	

      int i = ps.executeUpdate();
      if (i > 0)
    	  out.write("Success!!");
      else {
    	  out.write("Failed!!");
      }

    } catch (Exception e2) {
      System.out.println(e2);
    }

    out.close();
  }

}