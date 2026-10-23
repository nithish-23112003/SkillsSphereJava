package com.pentagon1;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/emp")
public class MyWeb extends HttpServlet {
	public void service(HttpServletRequest req,HttpServletResponse res) throws IOException {
		String name=req.getParameter("name");
		String email=req.getParameter("email");
		String password=req.getParameter("password");
		int id=Integer.parseInt(req.getParameter("id"));
		long mobile=Long.parseLong(req.getParameter("mobile"));
		PrintWriter print=res.getWriter();
		print.println("<h1 >Name:"+" "+"<span style='color:blue;'>"+name+"</span>"+"</h1>");
		print.println("<h1>email:"+" "+"<span style='color:blue;'>"+email+"</span>"+"</h1>");
		print.println("<h1>password:"+" "+"<span style='color:blue;'>"+password+"</span>"+"</h1>");
		print.println("<h1>Id:"+" "+"<span style='color:blue;'>"+id+"</span>"+"</h1>");
		print.println("<h1>mobile"+" "+"<span style='color:blue;'>"+mobile+"</span>"+"</h1>");
	}

}
