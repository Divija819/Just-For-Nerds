package com.rest.RestAPI;

import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import com.rest.dto.Books;
import com.rest.dto.Forum;
//import com.rest.dto.Department;
//import com.rest.dto.Employee;
import com.rest.dto.User;
import com.ts.dao.BooksDAO;
import com.ts.dao.ForumDAO;
//import com.ts.dao.DeptDAO;
//import com.ts.dao.EmployeeDAO;
import com.ts.dao.UserDAO;

@Path("myresource")
public class MyResource {
    @Path("hi")
	@GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hi() {
        return "Hi Service!";
    }
    
    @Path("hello")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello Service!";
    }
    
    
    /*@Path("getUsersJ")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public User getUsersJ() {
        User user = new User(100,"Supraja","password",948477758,"Nizampet");
    	return null;
    }*/
    
    @Path("getEmpByUserPass/{userName}/{password}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public User getEmpByUserPass(@PathParam("userName") String userName,@PathParam("password") String password) {
        System.out.println("Recieved path params: "+userName+" "+password); 
    	UserDAO userDAO = new UserDAO();
        User user = UserDAO.getEmpByUserPass(userName, password);
        return user;
    }
    
    
    @Path("geUsers")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
    	User user1 = new User();
        user1.setLoginId(100);
        user1.setUserName("Deepthimayi");
        user1.setPassword("841999");
        user1.setMobileNo("98989898");
        user1.setAddress("Andhra");
       
        User user2 = new User();
        user2.setLoginId(101);
        user2.setUserName("Shanmitha");
        user1.setPassword("1991999");
        user2.setMobileNo("94949494");
        user2.setAddress("Andhra");
        UserDAO userDAO = new UserDAO();
    	List <User> userList = userDAO.getAllUsers();
        
        return userList;
    }
    
   /* @Path("getDepartments")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Department> getDepartments() {        
               DeptDAO deptDao = new DeptDAO();
    	List <Department> deptList = deptDao.getAllDepts();
         return deptList;
    }
    

    
    
    @Path("getDeptByName/{deptName}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Department> getDeptByName(@PathParam("deptName") String deptName) {        
        System.out.println(deptName);      
    	DeptDAO deptDao = new DeptDAO();
    	List<Department> depts = deptDao.getDeptByName(deptName);
    	System.out.println(depts); 
    	return depts;
    }*/
    
    @Path("register")
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public void register(@FormParam("userName") String userName,@FormParam("password") String password,@FormParam("mobileNo") String mobileNo,@FormParam("address") String address) {
    	System.out.println(userName+" "+password+" "+mobileNo+" "+address);
    	
    }
    
    
    @Path("registerJ")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void registerJ(User user) {
    	System.out.println("Inside REST...");
    	UserDAO userDAO = new UserDAO();
    	userDAO.register(user); //send to database code 
    	System.out.println(user.getUserName()+" "+user.getPassword()+" "+user.getMobileNo()+" "+user.getAddress());
    }

    
    @POST
	@Path("/uploadImage")
	@Consumes({MediaType.MULTIPART_FORM_DATA})
	public void uploadImage(@FormDataParam("Image") InputStream fileInputStream, @FormDataParam("Image") FormDataContentDisposition 
    formDataContentDisposition, @FormDataParam("bookName") String bookName, @FormDataParam("description") String description, @FormDataParam("price") float price) throws IOException {
		int read = 0;
	    byte[] bytes = new byte[1024];
	 System.out.println("METHOD CALLED...." + bookName+" "+ price);
	 String path = this.getClass().getClassLoader().getResource("").getPath();
	 String pathArr[] = path.split("/WEB-INF/classes/");
	 FileOutputStream out = new FileOutputStream(new File(pathArr[0]+"/image/",formDataContentDisposition.getFileName()));
	    while ((read = fileInputStream.read(bytes)) != -1) {
	    	out.write(bytes, 0, read);
	    }
	    out.flush();
	    out.close();
	    
	    Books book = new Books();
		book.setBookName(bookName);
		book.setDescription(description);
		book.setPrice(price);
		book.setImageName(formDataContentDisposition.getFileName());
	    BooksDAO productDao = new BooksDAO();
	    productDao.addBook(book);
		//return Response.ok("Data Submitted Successfully.").build();	    
	}
	
	 	@GET
	    @Path("downloadImage")
	    @Produces(MediaType.APPLICATION_OCTET_STREAM)
	    public Response downloadFileWithGet()// @QueryParam("file") String file) 
	    		{
	 		System.out.println("Inside download image");
	 		File file = new File("C:/Users/shanm/Desktop/WiseModule4/RestAPI/WebContent/image/download.jpg");
	        ResponseBuilder response = Response.ok((Object) file);
	        response.header("Content-Disposition", "attachment;filename=" + "download.jpg");
	        System.out.println("Before return");
	        return response.build();
	    }
	 	

	    @Path("getBooks")
	    @GET
	    @Produces(MediaType.APPLICATION_JSON)
	    public List<Books> getBooks() {
	       
	    	BooksDAO booksDAO = new BooksDAO();
	    	List <Books> booksList = booksDAO.getAllBooks();
	        
	        return booksList;
	    }
	    
	    @Path("forum")
	    @POST
	    @Consumes(MediaType.APPLICATION_JSON)
	    public void Forum(Forum msg) {
	    System.out.println("Inside REST..." + msg);
	    ForumDAO forumDAO = new ForumDAO();
	    ForumDAO.post(msg); //send to database code
	    }
	   
	    @Path("getMsgs")
	    @GET
	    @Produces(MediaType.APPLICATION_JSON)
	    public List<Forum> getMsgs() {
	    List<Forum> forum = new ArrayList<Forum>();
	    ForumDAO forumDAO = new ForumDAO();
	    forum = forumDAO.getAllMsgs();
	    System.out.println(forum);
	    return forum;
	    }
}
