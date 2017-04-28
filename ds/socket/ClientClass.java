import java.net.*;
import java.io.*;
import java.util.*;
public class ClientClass{
	public static void main(String [] args) throws IOException{
			String msg;
			Scanner sc=new Scanner(System.in);
			System.out.println("Enter some Message");
			msg=sc.nextLine();
		try{
			Socket s=new Socket("localhost",6666);
			DataOutputStream dout=new DataOutputStream(s.getOutputStream());
			dout.writeUTF(msg);
			dout.flush();
			dout.close();
			s.close();
		}
		catch(Exception e){
		}
	}
}
