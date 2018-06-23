package com.example.springUserjpa.model;

import javax.persistence.*;

/**
 * Created by amit on 03/06/18.
 */
@Entity
@Table(name = "USER", schema = "sys")
public class User {

    @Id @GeneratedValue
    Long userId;

    @Column
    String Uname;

    @Column
    String Lname;

    @Column
    String Email;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUname() {
        return Uname;
    }

    public void setUname(String uname) {
        Uname = uname;
    }

    public String getLname() {
        return Lname;
    }

    public void setLname(String lname) {
        Lname = lname;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }
}
