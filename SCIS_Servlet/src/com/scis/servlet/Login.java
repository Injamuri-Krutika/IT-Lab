package com.scis.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Login extends HttpServlet {

	  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	    response.setContentType("text/html");
	    PrintWriter out = response.getWriter();
	    String uname = request.getParameter("uname");
	    String pass = request.getParameter("pass");

	    try {
	    
	      Class.forName("com.mysql.jdbc.Driver");
	      Connection con = DriverManager.getConnection("jdbc:mysql://localhost/scis?user=root&password=passwd@123");
	      PreparedStatement ps = con.prepareStatement("select * from users where first_name=? and password=?;");
	      System.out.println(uname+":"+pass.trim());
	      ps.setString(1, uname);
	      ps.setString(2, pass);

	      ResultSet res =  ps.executeQuery();
	      
	      if (res.next())
	    	  out.write("Success");
//	    	  response.sendRedirect("http://localhost:8081/SCIS_Servlet/index.html#home");
	      else
	    	  out.write("Invalid User name or password");

	    } catch (Exception e2) {
	      System.out.println(e2);
	    }

	    out.close();
	  }


}
