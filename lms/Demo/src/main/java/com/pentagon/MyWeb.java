package com.pentagon;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/cal")
public class MyWeb extends HttpServlet{
	public void service(HttpServletRequest req,HttpServletResponse res) throws IOException {
		int a=Integer.parseInt(req.getParameter("num1"));
		int b=Integer.parseInt(req.getParameter("num2"));
		String c=req.getParameter("calci");
		PrintWriter print=res.getWriter();
		switch(c) {
		case "+" :{
			int res1=a+b;
			print.println(res1);
			break;
		}
		case "-" :{
			int res1=a-b;
			print.println(res1);
			break;
		}
		case "*" :{
			int res1=a*b;
			print.println(res1);
			break;
		}
		case "/" :{
			int res1=a/b;
			print.println(res1);
			break;
		}
		default:print.println("enter correct operator");
		}
		
	}

}
