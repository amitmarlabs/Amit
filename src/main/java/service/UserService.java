package service;

import com.example.springUserjpa.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repo.UserRepository;

import java.util.List;
import java.util.Optional;

/**
 * Created by amit on 03/06/18.
 */
@Service
public class UserService {

  @Autowired
  UserRepository userRepository;


  public List<User> getUserDetails() {

    return (List)userRepository.findAll();
  }

  public void updateUser(User user) {
    userRepository.save(user);
  }

  public void saveUser(User user) {
    userRepository.save(user);
  }

  public void deleteUser(Long id) {

    userRepository.deleteById(id);
  }

  public User getUserDetailsById(Long id) {
    return userRepository.findById(id).get();

  }
}
