package com.smallgroup.app.domain;

import javax.persistence.*;

@Entity
public class Individual {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "IndividualId")
    private Long id;

    @Version
    private Integer version;

    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private boolean newsletter = true;
    private String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Individual() {}
    public Individual(String name) {
        this.name = name;
    }
    public Individual(String name, String email, String phoneNumber, String address) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    // region GET & SET
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isNewsletter() {
        return newsletter;
    }

    public void setNewsletter(boolean newsletter) {
        this.newsletter = newsletter;
    }
    // endregion

    @Override
    public String toString() {
        return "Individual{" +
                "id=" + id +
                ", version=" + version +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", newsletter=" + newsletter +
                '}';
    }
}
