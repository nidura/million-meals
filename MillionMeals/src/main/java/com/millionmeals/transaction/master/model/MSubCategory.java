package com.millionmeals.transaction.master.model;

import javax.persistence.*;

/**
 * Created by my on 2018-02-02.
 */
@Entity
@Table(name = "m_sub_category", schema = "million_meals", catalog = "")
public class MSubCategory {
    private Integer indexNo;
    private Integer mBranch;
    private String name;
    private String description;

    @Id
    @Column(name = "index_no")
    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    @Basic
    @Column(name = "m_branch")
    public Integer getmBranch() {
        return mBranch;
    }

    public void setmBranch(Integer mBranch) {
        this.mBranch = mBranch;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MSubCategory that = (MSubCategory) o;

        if (indexNo != null ? !indexNo.equals(that.indexNo) : that.indexNo != null) return false;
        if (mBranch != null ? !mBranch.equals(that.mBranch) : that.mBranch != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = indexNo != null ? indexNo.hashCode() : 0;
        result = 31 * result + (mBranch != null ? mBranch.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
