package controller;

import com.example.springUserjpa.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import repo.UserRepository;
import service.UserService;

import java.util.List;

/**
 * Created by amit on 03/06/18.
 */

@RestController
public class UserCOntroller {

    @Autowired
    UserService userService;

    @GetMapping(value = "/getUserDetails")
    public List<User> getUserDetails(){

        List<User>  userlist =  userService.getUserDetails();
        return userlist;
    }

    @PutMapping(value = "/updateUser")
    public void updateUser(@RequestBody User user){
        userService.updateUser(user);
    }

    @PostMapping(value = "/insertUser")
    public void inserUser(@RequestBody User user){
        userService.saveUser(user);
    }

    @DeleteMapping(value = "/deleteUsers/{id}")
    public void deleteUser(@PathVariable("id") Long id){
        userService.deleteUser(id);
    }


    @DeleteMapping(value = "/getUsersById/{id}")
    public User getUserDetalsById(@PathVariable("id") Long id){
        return  userService.getUserDetailsById(id);
    }

}
