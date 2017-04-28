import java.net.*;
import java.io.*;
import java.util.*;
public class ServerClass{
	public static void main(String args[]){	
		
		try{
			ServerSocket ss=new ServerSocket(6666);
			Socket s=ss.accept();
			DataInputStream din=new DataInputStream(s.getInputStream());
			String str=(String)din.readUTF();	
System.out.println("Recieved msg = "+ str);
			
		}
		catch(Exception e){
		}
	}
}
