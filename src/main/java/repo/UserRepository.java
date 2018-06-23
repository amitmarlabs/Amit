package repo;

import com.example.springUserjpa.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

/**
 * Created by amit on 03/06/18.
 */

public interface UserRepository extends CrudRepository<User,Long> {


}
