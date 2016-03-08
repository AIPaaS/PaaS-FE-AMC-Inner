 
package com.ai.amc.inner.vo;
import java.io.Serializable;

/**
 * 
 * @author mapl
 */
public class CodeValueObject implements Serializable {
    private static final long serialVersionUID = 1L;

    private String code;

    private String value;

    public CodeValueObject() {
    }

    public CodeValueObject(String code, String value) {
        this.code = code;
        this.value = value;
    }

    /**
     * @return Returns the code.
     */
    public String getCode() {
        return code;
    }

    /**
     * @param code
     *            The code to set.
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * @return Returns the value.
     */
    public String getValue() {
        return value;
    }

    /**
     * @param value
     *            The value to set.
     */
    public void setValue(String value) {
        this.value = value;
    }

    /**
     * Return a string representation of this object.
     */
    public String toString() {
        StringBuffer sb = new StringBuffer("CodeValueObject[");
        sb.append(this.code);
        sb.append(", ");
        sb.append(this.value);
        sb.append("]");
        return (sb.toString());
    }
}